export const branchOffices = [
  {
    id: 1,
    name: "Jakarta (Kantor Pusat)",
    instagram: "@assafariman",
    tiktok: "@assafarimantravel",
    youtube: "@assafarimanamanah",
    address:
      "Ruko Bona Indah Business Center No.9V Jln.Karang Tengah Raya No. 1 Lebak Bulus Jakarta Selatan 12440",
    phone: "+628231997802",
  },
  {
    id: 2,
    name: "Sumbawa",
    instagram: "@assafariman_sumbawa",
    address: "Jl.Lingk Tolotando Kel.Matakando Kec.Mpunda Sumbawa NTB",
    phone: "+6285205601186",
    tiktok: undefined,
    youtube: undefined,
  },

  {
    id: 3,
    name: "Belitung",
    instagram: "@assafariman_belitung",
    address:
      "Jl. Mualim 1 Andila RT.14/RW.05 No.9 Kel.Air Merbau Kec.Tanjung pandan Kab.Belitung Bangka Belitung",
    phone: "+6281379030491",
    tiktok: undefined,
    youtube: undefined,
  },
  {
    id: 4,
    name: "Lombok",
    instagram: "@assafariman_lombok1",
    phone: "+6281215679950",
    address:
      "Jln raya Mataram - Lbh. Lombok Km 64, Apitaik, kec. Pringgabaya, Lombok Timur",
    tiktok: undefined,
    youtube: undefined,
  },
  {
    id: 5,
    name: "Parung",
    instagram: "@assafariman_parung",
    phone: "+6281219619619",
    address:
      "Jl Me Wira Parung, Rt.2/RW5, Parung (Blok B NO.21) Parung, Kab. Bogor, Jawa Barat",
    tiktok: undefined,
    youtube: undefined,
  },
  {
    id: 6,
    name: "Gn. Sindur",
    instagram: "@assafariman_gn.sindur",
    phone: "+6282124240005",
    address:
      "Jl.Al Inayah Kp. Pondokmiri RT.02 RW.12 Desa Rawakalong Kec.Gunungsindur Kab.Bogor",
    tiktok: undefined,
    youtube: undefined,
  },
  {
    id: 7,
    name: "Sumba",
    instagram: "@assafariman_sumba",
    address:
      "Jl. Mananga Leli Dusun Mananga Wendewa Utara Mamboro Sumba Tengah NTT 87258",
    phone: "+6281223474153",
    tiktok: undefined,
    youtube: undefined,
  },
  {
    id: 8,
    name: "Florest",
    instagram: "@assafariman_florest",
    address: "Jln Nairoa, Rt: 08, Rw: 08, Desa Kel: Watumilok,Kec:Kangae",
    phone: "+6285382368993",
    tiktok: undefined,
    youtube: undefined,
  },
] as const;

export type BranchOffice = (typeof branchOffices)[number];
