type PageProps = {
  children?: React.ReactNode;
  backgroundUrl?: string;
};

export function Page({ children, backgroundUrl }: PageProps) {
  return (
    <main className="bg-black text-white">
      {backgroundUrl && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, transparent, black), url(${backgroundUrl})`,
          }}
        />
      )}

      {children}
    </main>
  );
}
