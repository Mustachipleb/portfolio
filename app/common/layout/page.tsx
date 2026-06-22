type PageProps = {
  children?: React.ReactNode;
  backgroundUrl?: string;
  darker?: boolean;
};

export function Page({ children, backgroundUrl, darker }: PageProps) {
  const gradientStart = darker ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)';
  return (
    <main className="bg-neutral-950 text-white min-h-screen">
      {backgroundUrl && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, ${gradientStart}, var(--color-neutral-950)), url(${backgroundUrl})`,
          }}
        />
      )}

      {children}
    </main>
  );
}
