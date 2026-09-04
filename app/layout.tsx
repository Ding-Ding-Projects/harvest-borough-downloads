import type { Metadata } from 'next';
import './globals.css';
import './responsive.css';
import site from '../site.config.json';
export const metadata:Metadata={title:'Harvest Borough | A little room to grow',description:'An original 3D farming and town-building game for Windows and Android. Official documentation and verified downloads.',metadataBase:new URL(site.canonicalUrl),alternates:{canonical:site.canonicalUrl},openGraph:{title:'Harvest Borough',description:'An original countryside, built one harvest at a time.',url:site.canonicalUrl,type:'website',siteName:'Harvest Borough'},twitter:{card:'summary_large_image'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
