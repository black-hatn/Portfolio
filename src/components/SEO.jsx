import { Helmet } from "react-helmet-async";

const siteUrl = import.meta.env.VITE_SITE_URL || "https://nouradine.dev";

export default function SEO({ 
  title, 
  description, 
  pathname = "", 
  image = "/og-image.png",
  type = "website",
  lang = "fr"
}) {
  const canonical = `${siteUrl}${pathname}`;
  const ogImage = image.startsWith("http") ? image : `${siteUrl}${image}`;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={lang === "fr" ? "fr_FR" : lang === "ar" ? "ar_SA" : "en_US"} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Language */}
      <html lang={lang} />
    </Helmet>
  );
}
