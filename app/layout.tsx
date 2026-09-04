import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'Harvest Borough | A little room to grow',description:'An original 3D farming and town-building game for Windows and Android. Official documentation and verified downloads.',metadataBase:new URL('https://harvest-borough.gerktongdew.chatgpt.site'),openGraph:{title:'Harvest Borough',description:'An original countryside, built one harvest at a time.',url:'https://harvest-borough.gerktongdew.chatgpt.site',type:'website',siteName:'Harvest Borough'},twitter:{card:'summary_large_image'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
