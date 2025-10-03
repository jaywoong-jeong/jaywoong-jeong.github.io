// metadata removed to keep this layout as a server component without client constraints

export default function ArtistLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="space-y-10">{children}</div>
}


