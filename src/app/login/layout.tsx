export default function LoginLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    // Ye nested layout hai → yaha <html> aur <body> mat likho
    return <>{children}</>;
  }
  