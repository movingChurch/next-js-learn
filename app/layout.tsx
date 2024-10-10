import Navigation from "../components/navigation";

export const metadata = {
  title: { template: "%s | Ground::Builder", default: "Loading..." },
  description: "Transferring Abilities Through Experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
