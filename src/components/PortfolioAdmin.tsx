"use client";
import { useState, useEffect, useRef } from "react";
import {
  LayoutDashboard, FileText, PlusCircle, ArrowLeft, Activity,
  LogOut, Trash2, Edit2, X, Save, ImageIcon, Monitor, Smartphone, Layers, Video
} from "lucide-react";

type TabType = "websites" | "apps" | "creatives" | "reels";

interface BaseItem { id: string; imageSrc: string; accent: string; }
interface ReelItem { id:string; title:string; category:string; metric:string; metricLabel:string; accent:string; bg:string; videoSrc:string; }
interface WebsiteItem extends BaseItem { title:string; category:string; url:string; desc:string; metric:string; metricLabel:string; tech:string; }
interface AppItem extends BaseItem { title:string; category:string; platform:string; desc:string; metric:string; metricLabel:string; tech:string; }
interface CreativeItem extends BaseItem { brand:string; type:string; platform:string; }
type AnyItem = WebsiteItem | AppItem | CreativeItem | ReelItem;

function Sidebar({ active }: { active: string }) {
  const navItems = [
    { label:"Dashboard",  href:"/admin",           icon:<LayoutDashboard size={16}/> },
    { label:"All Posts",  href:"/admin",           icon:<FileText size={16}/> },
    { label:"New Post",   href:"/admin/posts/new", icon:<PlusCircle size={16}/> },
    { label:"Activity",   href:"/admin/updates",   icon:<Activity size={16}/> },
    { label:"Portfolio",  href:"/admin/portfolio", icon:<Layers size={16}/> },
    { label:"Back to Site",href:"/",              icon:<ArrowLeft size={16}/> },
  ];
  return (
    <aside className="w-60 flex-shrink-0 flex flex-col min-h-screen" style={{ background:"#17184B" }}>
      <div className="px-6 py-7 border-b" style={{ borderColor:"rgba(255,255,255,0.07)" }}>
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background:"linear-gradient(135deg,#D8E63C,#D6B4FC)" }}>
            <span className="text-[#17184B] text-xs font-black">C</span>
          </div>
          <span className="text-white font-bold tracking-widest text-sm">COADAL</span>
        </div>
        <p className="text-xs mt-1.5" style={{ color:"rgba(255,255,255,0.3)" }}>Admin Panel</p>
      </div>
      <nav className="flex flex-col py-6 px-3 gap-1 flex-1">
        {navItems.map(item => (
          <a key={item.label} href={item.href}
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
            style={{ color:active===item.label?"#ffffff":"rgba(255,255,255,0.5)", background:active===item.label?"rgba(255,255,255,0.1)":"transparent" }}>
            {item.icon} {item.label}
          </a>
        ))}
      </nav>
      <div className="px-4 py-5 border-t" style={{ borderColor:"rgba(255,255,255,0.07)" }}>
        <button onClick={async()=>{ await fetch("/api/admin/logout",{method:"POST"}); window.location.href="/admin/login"; }}
          className="flex items-center gap-3 w-full px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-red-500/10"
          style={{ color:"rgba(255,100,100,0.70)" }}>
          <LogOut size={16}/> Logout
        </button>
      </div>
    </aside>
  );
}

const inputStyle = { background:"#ffffff", border:"1px solid rgba(23,24,75,0.12)", borderRadius:"12px", padding:"10px 14px", fontSize:"14px", color:"#0d0d0d", outline:"none", width:"100%" };
const labelStyle = { fontSize:"12px", fontWeight:600 as const, color:"rgba(13,13,13,0.5)", textTransform:"uppercase" as const, letterSpacing:"0.1em", display:"block", marginBottom:"6px" };

// ── Video Upload Field ──
function VideoField({ value, onChange }: { value:string; onChange:(url:string)=>void }) {
  const ref = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; if (!file) return;
    setUploading(true);
    const fd = new FormData(); fd.append("file", file); fd.append("folder", "reels");
    const res = await fetch("/api/upload", { method:"POST", body:fd });
    const data = await res.json();
    if (data.url) onChange(data.url);
    setUploading(false);
  };

  return (
    <div>
      <label style={labelStyle}>Video File</label>
      <div className="flex gap-3 items-start flex-wrap">
        {value && (
          <video src={value} style={{ width:100, height:70, objectFit:"cover", borderRadius:8, border:"1px solid rgba(0,0,0,0.08)", flexShrink:0 }} muted />
        )}
        <div style={{ flex:1, minWidth:200 }}>
          <input type="text" placeholder="Or paste video URL..." value={value} onChange={e=>onChange(e.target.value)} style={{ ...inputStyle, marginBottom:8 }} />
          <button type="button" onClick={()=>ref.current?.click()}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium hover:opacity-80"
            style={{ background:"#F0EEE9", color:"#17184B", border:"1px solid rgba(23,24,75,0.12)" }}>
            <Video size={14}/> {uploading?"Uploading...":"Upload Video"}
          </button>
          <p className="text-xs mt-2" style={{ color:"rgba(13,13,13,0.35)" }}>MP4 recommended · will loop & autoplay muted on the card</p>
          <input ref={ref} type="file" accept="video/*" className="hidden" onChange={handleFile} />
        </div>
      </div>
    </div>
  );
}

// ── Image Upload Field ──
function ImageField({ value, onChange, folder }: { value:string; onChange:(url:string)=>void; folder:string }) {
  const ref = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; if (!file) return;
    setUploading(true);
    const fd = new FormData(); fd.append("file", file); fd.append("folder", folder);
    const res = await fetch("/api/upload", { method:"POST", body:fd });
    const data = await res.json();
    if (data.url) onChange(data.url);
    setUploading(false);
  };

  return (
    <div>
      <label style={labelStyle}>Image / Screenshot</label>
      <div className="flex gap-3 items-start flex-wrap">
        {value && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={value} alt="" style={{ width:100, height:70, objectFit:"cover", borderRadius:8, border:"1px solid rgba(0,0,0,0.08)", flexShrink:0 }} />
        )}
        <div style={{ flex:1, minWidth:200 }}>
          <input type="text" placeholder="Or paste image URL..." value={value} onChange={e=>onChange(e.target.value)} style={{ ...inputStyle, marginBottom:8 }} />
          <button type="button" onClick={()=>ref.current?.click()}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium hover:opacity-80"
            style={{ background:"#F0EEE9", color:"#17184B", border:"1px solid rgba(23,24,75,0.12)" }}>
            <ImageIcon size={14}/> {uploading?"Uploading...":"Upload Image"}
          </button>
          <input ref={ref} type="file" accept="image/*" className="hidden" onChange={handleFile} />
        </div>
      </div>
    </div>
  );
}

// ── Website Form ──
function WebsiteForm({ item, onSave, onCancel }: { item?:WebsiteItem; onSave:(data:Partial<WebsiteItem>)=>void; onCancel:()=>void }) {
  const [f, setF] = useState({ title:item?.title??"", category:item?.category??"", url:item?.url??"", desc:item?.desc??"", metric:item?.metric??"", metricLabel:item?.metricLabel??"", tech:item?.tech??"", accent:item?.accent??"#D8E63C", imageSrc:item?.imageSrc??"" });
  return (
    <div className="p-7 flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-4">
        <div><label style={labelStyle}>Title *</label><input required value={f.title} onChange={e=>setF(p=>({...p,title:e.target.value}))} placeholder="NeuralCart" style={inputStyle}/></div>
        <div><label style={labelStyle}>Category</label><input value={f.category} onChange={e=>setF(p=>({...p,category:e.target.value}))} placeholder="AI E-Commerce" style={inputStyle}/></div>
        <div><label style={labelStyle}>URL</label><input value={f.url} onChange={e=>setF(p=>({...p,url:e.target.value}))} placeholder="neuralcart.ai" style={inputStyle}/></div>
        <div><label style={labelStyle}>Accent Color</label><div className="flex gap-2 items-center"><input type="color" value={f.accent} onChange={e=>setF(p=>({...p,accent:e.target.value}))} className="w-10 h-10 rounded cursor-pointer" style={{border:"none",padding:0}}/><input value={f.accent} onChange={e=>setF(p=>({...p,accent:e.target.value}))} style={{...inputStyle,flex:1}}/></div></div>
        <div><label style={labelStyle}>Metric</label><input value={f.metric} onChange={e=>setF(p=>({...p,metric:e.target.value}))} placeholder="+40%" style={inputStyle}/></div>
        <div><label style={labelStyle}>Metric Label</label><input value={f.metricLabel} onChange={e=>setF(p=>({...p,metricLabel:e.target.value}))} placeholder="Conversion Rate" style={inputStyle}/></div>
      </div>
      <div><label style={labelStyle}>Description</label><textarea rows={3} value={f.desc} onChange={e=>setF(p=>({...p,desc:e.target.value}))} placeholder="Describe the project..." style={{...inputStyle,resize:"vertical"}}/></div>
      <div><label style={labelStyle}>Tech Stack (comma-separated)</label><input value={f.tech} onChange={e=>setF(p=>({...p,tech:e.target.value}))} placeholder="Next.js, OpenAI, Stripe" style={inputStyle}/></div>
      <ImageField value={f.imageSrc} onChange={url=>setF(p=>({...p,imageSrc:url}))} folder="portfolio" />
      <div className="flex gap-3 pt-2">
        <button type="button" onClick={onCancel} className="px-5 py-2.5 rounded-full text-sm font-medium" style={{background:"#F0EEE9",color:"rgba(13,13,13,0.6)",border:"1px solid rgba(23,24,75,0.12)"}}>Cancel</button>
        <button type="button" onClick={()=>onSave({...f,tech:f.tech as unknown as string})} className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold hover:opacity-90" style={{background:"#D8E63C",color:"#17184B"}}><Save size={14}/> Save</button>
      </div>
    </div>
  );
}

// ── App Form ──
function AppForm({ item, onSave, onCancel }: { item?:AppItem; onSave:(data:Partial<AppItem>)=>void; onCancel:()=>void }) {
  const [f, setF] = useState({ title:item?.title??"", category:item?.category??"", platform:item?.platform??"iOS & Android", desc:item?.desc??"", metric:item?.metric??"", metricLabel:item?.metricLabel??"", tech:item?.tech??"", accent:item?.accent??"#D6B4FC", imageSrc:item?.imageSrc??"" });
  return (
    <div className="p-7 flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-4">
        <div><label style={labelStyle}>Title *</label><input required value={f.title} onChange={e=>setF(p=>({...p,title:e.target.value}))} placeholder="PocketPay" style={inputStyle}/></div>
        <div><label style={labelStyle}>Category</label><input value={f.category} onChange={e=>setF(p=>({...p,category:e.target.value}))} placeholder="FinTech" style={inputStyle}/></div>
        <div><label style={labelStyle}>Platform</label><input value={f.platform} onChange={e=>setF(p=>({...p,platform:e.target.value}))} placeholder="iOS & Android" style={inputStyle}/></div>
        <div><label style={labelStyle}>Accent Color</label><div className="flex gap-2 items-center"><input type="color" value={f.accent} onChange={e=>setF(p=>({...p,accent:e.target.value}))} className="w-10 h-10 rounded cursor-pointer" style={{border:"none",padding:0}}/><input value={f.accent} onChange={e=>setF(p=>({...p,accent:e.target.value}))} style={{...inputStyle,flex:1}}/></div></div>
        <div><label style={labelStyle}>Metric</label><input value={f.metric} onChange={e=>setF(p=>({...p,metric:e.target.value}))} placeholder="100K+" style={inputStyle}/></div>
        <div><label style={labelStyle}>Metric Label</label><input value={f.metricLabel} onChange={e=>setF(p=>({...p,metricLabel:e.target.value}))} placeholder="Downloads" style={inputStyle}/></div>
      </div>
      <div><label style={labelStyle}>Description</label><textarea rows={3} value={f.desc} onChange={e=>setF(p=>({...p,desc:e.target.value}))} style={{...inputStyle,resize:"vertical"}}/></div>
      <div><label style={labelStyle}>Tech Stack (comma-separated)</label><input value={f.tech} onChange={e=>setF(p=>({...p,tech:e.target.value}))} placeholder="React Native, Node.js, Stripe" style={inputStyle}/></div>
      <ImageField value={f.imageSrc} onChange={url=>setF(p=>({...p,imageSrc:url}))} folder="portfolio" />
      <div className="flex gap-3 pt-2">
        <button type="button" onClick={onCancel} className="px-5 py-2.5 rounded-full text-sm font-medium" style={{background:"#F0EEE9",color:"rgba(13,13,13,0.6)",border:"1px solid rgba(23,24,75,0.12)"}}>Cancel</button>
        <button type="button" onClick={()=>onSave({...f,tech:f.tech as unknown as string})} className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold hover:opacity-90" style={{background:"#D8E63C",color:"#17184B"}}><Save size={14}/> Save</button>
      </div>
    </div>
  );
}

// ── Creative Form ──
const PLATFORMS = ["Instagram","Facebook","LinkedIn","Twitter / X","YouTube","Google Display"];
function CreativeForm({ item, onSave, onCancel }: { item?:CreativeItem; onSave:(data:Partial<CreativeItem>)=>void; onCancel:()=>void }) {
  const [f, setF] = useState({ brand:item?.brand??"", type:item?.type??"", platform:item?.platform??"Instagram", accent:item?.accent??"#D8E63C", imageSrc:item?.imageSrc??"" });
  return (
    <div className="p-7 flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-4">
        <div><label style={labelStyle}>Brand Name *</label><input required value={f.brand} onChange={e=>setF(p=>({...p,brand:e.target.value}))} placeholder="NeuralCart" style={inputStyle}/></div>
        <div><label style={labelStyle}>Creative Type</label><input value={f.type} onChange={e=>setF(p=>({...p,type:e.target.value}))} placeholder="Product Launch" style={inputStyle}/></div>
        <div><label style={labelStyle}>Platform</label><select value={f.platform} onChange={e=>setF(p=>({...p,platform:e.target.value}))} style={inputStyle}>{PLATFORMS.map(p=><option key={p}>{p}</option>)}</select></div>
        <div><label style={labelStyle}>Accent Color</label><div className="flex gap-2 items-center"><input type="color" value={f.accent} onChange={e=>setF(p=>({...p,accent:e.target.value}))} className="w-10 h-10 rounded cursor-pointer" style={{border:"none",padding:0}}/><input value={f.accent} onChange={e=>setF(p=>({...p,accent:e.target.value}))} style={{...inputStyle,flex:1}}/></div></div>
      </div>
      <ImageField value={f.imageSrc} onChange={url=>setF(p=>({...p,imageSrc:url}))} folder="portfolio" />
      <div className="flex gap-3 pt-2">
        <button type="button" onClick={onCancel} className="px-5 py-2.5 rounded-full text-sm font-medium" style={{background:"#F0EEE9",color:"rgba(13,13,13,0.6)",border:"1px solid rgba(23,24,75,0.12)"}}>Cancel</button>
        <button type="button" onClick={()=>onSave(f)} className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold hover:opacity-90" style={{background:"#D8E63C",color:"#17184B"}}><Save size={14}/> Save</button>
      </div>
    </div>
  );
}

// ── Reel Form ──
function ReelForm({ item, onSave, onCancel }: { item?:ReelItem; onSave:(data:Partial<ReelItem>)=>void; onCancel:()=>void }) {
  const [f, setF] = useState({ title:item?.title??"", category:item?.category??"", metric:item?.metric??"", metricLabel:item?.metricLabel??"", accent:item?.accent??"#D8E63C", videoSrc:item?.videoSrc??"" });
  return (
    <div className="p-7 flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-4">
        <div><label style={labelStyle}>Title *</label><input required value={f.title} onChange={e=>setF(p=>({...p,title:e.target.value}))} placeholder="NeuralCart" style={inputStyle}/></div>
        <div><label style={labelStyle}>Category</label><input value={f.category} onChange={e=>setF(p=>({...p,category:e.target.value}))} placeholder="AI Web App" style={inputStyle}/></div>
        <div><label style={labelStyle}>Metric</label><input value={f.metric} onChange={e=>setF(p=>({...p,metric:e.target.value}))} placeholder="+40%" style={inputStyle}/></div>
        <div><label style={labelStyle}>Metric Label</label><input value={f.metricLabel} onChange={e=>setF(p=>({...p,metricLabel:e.target.value}))} placeholder="Conversion Rate" style={inputStyle}/></div>
        <div className="col-span-2"><label style={labelStyle}>Accent Color</label><div className="flex gap-2 items-center"><input type="color" value={f.accent} onChange={e=>setF(p=>({...p,accent:e.target.value}))} className="w-10 h-10 rounded cursor-pointer" style={{border:"none",padding:0}}/><input value={f.accent} onChange={e=>setF(p=>({...p,accent:e.target.value}))} style={{...inputStyle,flex:1}}/></div></div>
      </div>
      <VideoField value={f.videoSrc} onChange={url=>setF(p=>({...p,videoSrc:url}))} />
      <div className="flex gap-3 pt-2">
        <button type="button" onClick={onCancel} className="px-5 py-2.5 rounded-full text-sm font-medium" style={{background:"#F0EEE9",color:"rgba(13,13,13,0.6)",border:"1px solid rgba(23,24,75,0.12)"}}>Cancel</button>
        <button type="button" onClick={()=>onSave(f)} className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold hover:opacity-90" style={{background:"#D8E63C",color:"#17184B"}}><Save size={14}/> Save</button>
      </div>
    </div>
  );
}

// ── Main Component ──
export default function PortfolioAdmin() {
  const [tab, setTab] = useState<TabType>("websites");
  const [items, setItems] = useState<AnyItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editItem, setEditItem] = useState<AnyItem|null>(null);
  const [showNew, setShowNew] = useState(false);

  const load = (t: TabType = tab) => {
    setLoading(true);
    fetch(`/api/portfolio?type=${t}`).then(r=>r.json()).then(d=>{ if(Array.isArray(d)) setItems(d); setLoading(false); }).catch(()=>setLoading(false));
  };

  useEffect(()=>{ load(tab); }, [tab]); // eslint-disable-line react-hooks/exhaustive-deps

  const save = async (data: Partial<AnyItem>, id?: string) => {
    // Convert tech string to array for websites/apps
    const payload = { ...data };
    if ((tab==="websites"||tab==="apps") && typeof (payload as {tech?:unknown}).tech === "string") {
      (payload as {tech:string[]}).tech = ((payload as {tech:string}).tech).split(",").map((s:string)=>s.trim()).filter(Boolean);
    }
    if (id) {
      await fetch(`/api/portfolio?type=${tab}&id=${id}`, { method:"PUT", headers:{"Content-Type":"application/json"}, body:JSON.stringify(payload) });
    } else {
      await fetch(`/api/portfolio?type=${tab}`, { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(payload) });
    }
    setEditItem(null); setShowNew(false); load(tab);
  };

  const del = async (id: string) => {
    if (!confirm("Delete this item?")) return;
    await fetch(`/api/portfolio?type=${tab}&id=${id}`, { method:"DELETE" });
    setItems(p=>p.filter(x=>x.id!==id));
  };

  const TABS: { key:TabType; label:string; icon:React.ReactNode }[] = [
    { key:"websites",  label:"Websites",  icon:<Monitor size={15}/> },
    { key:"apps",      label:"Apps",      icon:<Smartphone size={15}/> },
    { key:"creatives", label:"Creatives", icon:<ImageIcon size={15}/> },
    { key:"reels",     label:"Reels",     icon:<Video size={15}/> },
  ];

  const getName = (item: AnyItem) => (item as WebsiteItem).title || (item as CreativeItem).brand || "—";
  const getSub  = (item: AnyItem) => (item as WebsiteItem).category || (item as CreativeItem).type || "";
  const hasMedia= (item: AnyItem) => (item as BaseItem).imageSrc || (item as ReelItem).videoSrc || "";

  return (
    <div className="flex min-h-screen">
      <Sidebar active="Portfolio" />
      <main className="flex-1 overflow-auto" style={{ background:"#F0EEE9" }}>
        {/* Header */}
        <div className="px-10 py-8 border-b" style={{ background:"#ffffff", borderColor:"rgba(23,24,75,0.08)" }}>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold" style={{ color:"#0d0d0d", fontFamily:"var(--font-syne)" }}>Portfolio</h1>
              <p className="text-sm mt-0.5" style={{ color:"rgba(13,13,13,0.45)" }}>Manage portfolio images and project details</p>
            </div>
            <button onClick={()=>{ setShowNew(true); setEditItem(null); }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold hover:opacity-90"
              style={{ background:"#D8E63C", color:"#17184B" }}>
              <PlusCircle size={16}/> Add {tab==="websites"?"Website":tab==="apps"?"App":tab==="creatives"?"Creative":"Reel"}
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mt-6">
            {TABS.map(t => (
              <button key={t.key} onClick={()=>{ setTab(t.key); setShowNew(false); setEditItem(null); }}
                className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all"
                style={{ background:tab===t.key?"#17184B":"rgba(23,24,75,0.06)", color:tab===t.key?"#ffffff":"rgba(13,13,13,0.55)" }}>
                {t.icon} {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="px-10 py-8 flex flex-col gap-6">
          {/* New / Edit Form */}
          {(showNew || editItem) && (
            <div className="rounded-2xl overflow-hidden" style={{ background:"#ffffff", border:"1px solid rgba(23,24,75,0.08)" }}>
              <div className="px-7 py-5 border-b flex items-center justify-between" style={{ borderColor:"rgba(23,24,75,0.07)" }}>
                <h2 className="font-bold text-base" style={{ color:"#0d0d0d", fontFamily:"var(--font-syne)" }}>
                  {editItem?"Edit":"Add New"} {tab==="websites"?"Website":tab==="apps"?"App":tab==="creatives"?"Creative":"Reel"}
                </h2>
                <button onClick={()=>{ setShowNew(false); setEditItem(null); }} className="w-8 h-8 rounded-lg flex items-center justify-center hover:opacity-70" style={{ background:"#F0EEE9", color:"#17184B" }}><X size={14}/></button>
              </div>
              {tab==="websites"  && <WebsiteForm  item={editItem as WebsiteItem|undefined}  onSave={d=>save(d,editItem?.id)} onCancel={()=>{ setShowNew(false); setEditItem(null); }} />}
              {tab==="apps"      && <AppForm      item={editItem as AppItem|undefined}      onSave={d=>save(d,editItem?.id)} onCancel={()=>{ setShowNew(false); setEditItem(null); }} />}
              {tab==="creatives" && <CreativeForm item={editItem as CreativeItem|undefined} onSave={d=>save(d,editItem?.id)} onCancel={()=>{ setShowNew(false); setEditItem(null); }} />}
              {tab==="reels"     && <ReelForm     item={editItem as ReelItem|undefined}     onSave={d=>save(d,editItem?.id)} onCancel={()=>{ setShowNew(false); setEditItem(null); }} />}
            </div>
          )}

          {/* Items list */}
          <div className="rounded-2xl overflow-hidden" style={{ background:"#ffffff", border:"1px solid rgba(23,24,75,0.08)" }}>
            <div className="px-7 py-5 border-b flex items-center justify-between" style={{ borderColor:"rgba(23,24,75,0.07)" }}>
              <h2 className="font-bold text-base" style={{ color:"#0d0d0d" }}>
                {tab==="websites"?"Websites":tab==="apps"?"Apps":tab==="creatives"?"Creatives":"Reels"}
              </h2>
              <span className="text-xs px-3 py-1 rounded-full" style={{ background:"#F0EEE9", color:"rgba(13,13,13,0.5)" }}>{items.length} items</span>
            </div>
            {loading ? (
              <div className="py-16 text-center" style={{ color:"rgba(13,13,13,0.4)" }}>Loading...</div>
            ) : items.length===0 ? (
              <div className="py-16 text-center"><p style={{ color:"rgba(13,13,13,0.4)" }}>No items yet.</p></div>
            ) : (
              <div className="divide-y" style={{ borderColor:"rgba(23,24,75,0.05)" }}>
                {items.map(item => (
                  <div key={item.id} className="px-7 py-4 flex items-center gap-4">
                    {/* Thumb */}
                    <div style={{ width:72, height:48, borderRadius:10, overflow:"hidden", flexShrink:0, background:"#F0EEE9", border:"1px solid rgba(0,0,0,0.07)" }}>
                      {(item as ReelItem).videoSrc ? (
                        <video src={(item as ReelItem).videoSrc} style={{ width:"100%", height:"100%", objectFit:"cover" }} muted />
                      ) : (item as BaseItem).imageSrc ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={(item as BaseItem).imageSrc} alt="" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                      ) : (
                        <div style={{ width:"100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"center" }}>
                          {tab==="reels" ? <Video size={16} color="rgba(13,13,13,0.2)"/> : <ImageIcon size={16} color="rgba(13,13,13,0.2)" />}
                        </div>
                      )}
                    </div>
                    {/* Info */}
                    <div style={{ flex:1, minWidth:0 }}>
                      <p className="font-semibold text-sm truncate" style={{ color:"#0d0d0d" }}>{getName(item)}</p>
                      <p className="text-xs mt-0.5" style={{ color:"rgba(13,13,13,0.4)" }}>{getSub(item)}</p>
                    </div>
                    {/* Media status */}
                    <span className="text-xs px-3 py-1 rounded-full hidden sm:block" style={{
                      background: hasMedia(item) ? "rgba(34,197,94,0.1)" : "rgba(13,13,13,0.05)",
                      color: hasMedia(item) ? "#16a34a" : "rgba(13,13,13,0.35)",
                    }}>{hasMedia(item) ? (tab==="reels"?"Video set":"Image set") : (tab==="reels"?"No video":"No image")}</span>
                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      <button onClick={()=>{ setEditItem(item); setShowNew(false); }}
                        className="w-8 h-8 rounded-lg flex items-center justify-center hover:opacity-70"
                        style={{ background:"#F0EEE9", color:"#17184B" }}>
                        <Edit2 size={14}/>
                      </button>
                      <button onClick={()=>del(item.id)}
                        className="w-8 h-8 rounded-lg flex items-center justify-center hover:opacity-70"
                        style={{ background:"rgba(239,68,68,0.1)", color:"#dc2626" }}>
                        <Trash2 size={14}/>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
