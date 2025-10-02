import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const BlogPage = () => {
  // Sample blog data - in a real implementation, this would come from a CMS or database
  const blogPosts = [
    {
      id: 1,
      title: "Persiapan Mental Sebelum Berangkat Umroh",
      excerpt:
        "Tips penting untuk mempersiapkan mental sebelum menunaikan ibadah umroh agar perjalanan menjadi lebih bermakna dan khusyuk.",
      date: "15 Juni 2024",
      category: "Umroh Guidance",
    },
    {
      id: 2,
      title: "Destinasi Wisata Halal Terbaik di Turki",
      excerpt:
        "Mengunjungi tempat-tempat wisata yang sesuai dengan prinsip-prinsip Islam di negara yang indah ini.",
      date: "20 Juni 2024",
      category: "Travel Tips",
    },
    {
      id: 3,
      title: "Panduan Praktis Menunaikan Ibadah Umroh",
      excerpt:
        "Langkah-langkah praktis dalam menunaikan ibadah umroh untuk pemula yang ingin mengetahui tata cara yang benar.",
      date: "25 Juni 2024",
      category: "Umroh Guidance",
    },
    {
      id: 4,
      title: "Keutamaan dan Hikmah Ibadah Umroh",
      excerpt:
        "Mengenal lebih dalam tentang keutamaan dan hikmah yang bisa didapatkan dari menunaikan ibadah umroh.",
      date: "30 Juni 2024",
      category: "Islamic Insights",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center text-yellow-600 hover:text-yellow-700 mb-12">
            <ArrowLeft className="w-4 h-4 mr-2" />
            <Link href="/">Kembali ke Beranda</Link>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Artikel & Wawasan
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Temukan informasi, tips, dan wawasan seputar perjalanan umroh,
              haji, dan wisata halal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="text-sm text-yellow-600 font-medium mb-2">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-yellow-600 hover:text-yellow-700 font-medium flex items-center"
                    >
                      Baca Selengkapnya
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
