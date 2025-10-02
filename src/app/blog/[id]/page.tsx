import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const BlogDetailPage = ({}: { params: { id: string } }) => {
  // In a real implementation, this data would come from a CMS or database based on the ID
  const blogPost = {
    id: 1,
    title: "Persiapan Mental Sebelum Berangkat Umroh",
    date: "15 Juni 2024",
    category: "Umroh Guidance",
    content: `
      <p>Menunaikan ibadah umroh adalah pengalaman spiritual yang sangat penting dalam kehidupan seorang Muslim. Namun, banyak jamaah yang hanya fokus pada persiapan fisik dan administratif, sementara melupakan persiapan mental yang tak kalah pentingnya.</p>
      
      <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">Mengapa Persiapan Mental Penting?</h3>
      <p>Persiapan mental membantu jamaah untuk:</p>
      <ul className="list-disc pl-6 mt-3 space-y-2">
        <li>Mencapai keadaan khusyuk selama perjalanan ibadah</li>
        <li>Menghadapi berbagai tantangan selama perjalanan dengan tenang</li>
        <li>Mempersiapkan diri secara batin untuk menerima keberkahan dari ibadah</li>
        <li>Menjaga niat yang tulus hanya untuk Allah SWT</li>
      </ul>
      
      <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">Tips Persiapan Mental</h3>
      <p>Berikut beberapa tips yang bisa Anda lakukan sebelum berangkat umroh:</p>
      
      <h4 className="text-xl font-semibold text-gray-800 mt-4 mb-2">1. Niat yang Tulus</h4>
      <p>Niatkan umroh hanya karena Allah SWT. Bersihkan hati dari riya' atau pamer kepada orang lain.</p>
      
      <h4 className="text-xl font-semibold text-gray-800 mt-4 mb-2">2. Perbanyak Amalan Sunnah</h4>
      <p>Perbanyak membaca Al-Qur'an, berdzikir, dan mengerjakan amalan sunnah sebelum keberangkatan.</p>
      
      <h4 className="text-xl font-semibold text-gray-800 mt-4 mb-2">3. Persiapkan Pengetahuan</h4>
      <p>Pelajari tata cara umroh yang benar, doa-doa, serta hal-hal yang diperlukan selama perjalanan.</p>
      
      <h4 className="text-xl font-semibold text-gray-800 mt-4 mb-2">4. Berdoa dan Bersedekah</h4>
      <p>Minta doa kepada orang tua dan keluarga, serta perbanyak bersedekah sebagai bekal perjalanan.</p>
      
      <p className="mt-6">Dengan persiapan mental yang matang, insya Allah perjalanan umroh Anda akan menjadi pengalaman spiritual yang membekas dan penuh berkah.</p>
    `,
    relatedPosts: [
      {
        id: 2,
        title: "Panduan Praktis Menunaikan Ibadah Umroh",
        date: "25 Juni 2024",
      },
      {
        id: 3,
        title: "Keutamaan dan Hikmah Ibadah Umroh",
        date: "30 Juni 2024",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      {" "}
      {/* Added padding-top to account for fixed navbar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="flex items-center text-yellow-600 hover:text-yellow-70 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Artikel
          </Link>

          <article className="bg-gray-50 rounded-2xl p-8">
            <div className="mb-6">
              <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
                {blogPost.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {blogPost.title}
            </h1>

            <div className="flex items-center text-gray-500 text-sm mb-8">
              <span>{blogPost.date}</span>
            </div>

            <div
              className="prose max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Artikel Terkait
              </h3>
              <div className="space-y-3">
                {blogPost.relatedPosts.map((post) => (
                  <div key={post.id} className="py-2">
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-yellow-600 hover:text-yellow-700 font-medium"
                    >
                      {post.title}
                    </Link>
                    <div className="text-sm text-gray-500">{post.date}</div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
