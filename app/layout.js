import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  icons: {
    apple: '/apple-icon.png',
  },
  metadataBase: new URL('https://www.streetgottalent.com'),
    alternates: {
      canonical: '/',
    },
    twitter: {
      card: 'summary_large_image',
      title: "Street's Got Talent: Explore the Latest Trends and Insights",
      description: 'Discover insightful articles and discussions on the latest trends across various industries at TrendsTalk Hubb.',
      siteId: '@Xpatainment',
      creator: 'Xpatainment',
      creatorId: '@Xpatainment',
      images: ['https://www.trendstalkhubb.info/favicon.png'], // Must be an absolute URL
      url: "https://www.streetgottalent.com",
    },
  openGraph: {
    title: "Street's Got Talent: Explore the Latest Trends and Insights",
    description: 'Discover insightful articles and discussions on the latest trends across various industries at TrendsTalk Hubb.',
    keywords: "street, talent, xpatainment, discussions, industry trends, latest trends, blog, blogging, Trending topics, Trend analysis, news, blog",
    url: 'https://www.streetgottalent.com',
    siteName: 'Streetgottalent',
    images: [
      {
        url: 'https://www.streetgottalent.com/favicon.ico', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://www.streetgottalent.com/favicon.ico', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'streetgottalent.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  title: "Street's Got Talent: Explore the Latest Trends and Insights",
  description: "Discover insightful articles and discussions on the latest trends across various industries at Streetgottalent.",
  keywords: "streets, insights, talent, discussions, industry trends, latest trends, blog, blogging, Trending topics, Trend analysis, news, blog",
  author: "TrendsTalk Hubb",
  url: "https://www.trendstalkhubb.info",
  image: "https://www.trendstalkhubb.info/favicon.png",
  siteName: "TrendsTalk Hubb",
  type: "website"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
