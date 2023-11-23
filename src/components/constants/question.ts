import type { QuestionType } from '@/types/exhibition';

export const listQuestionPos1: QuestionType[] = [
    {
        title: 'text',
        question: 'Apa hal terpenting bagimu saat ini?',
        choice: [
            { answer: 'Pasangan / Orang yang dikagumi', value: 'riskTaking' },
            { answer: 'Aset dan uang', value: 'criticalThinking' },
            { answer: 'Orang tua', value: 'visionary' },
            { answer: 'Sahabat', value: 'teamwork' }
        ],
        answer: null
    },
    {
        title: 'text',
        question: 'Situasi apa yang membuat kamu tidak nyaman?',
        choice: [
            {
                answer: 'Sesuatu yang belum jelas',
                value: 'complexProblemSolver'
            },
            { answer: 'Hal-hal yang monoton', value: 'creativeThinking' },
            { answer: 'Tidak ada perkembangan', value: 'visionary' },
            { answer: 'Tidak adanya sumber inspirasi', value: 'leadership' }
        ],
        answer: null
    },
    {
        title: 'text',
        question: 'Ketika kamu diberi satu permintaan, kamu akan?',
        choice: [
            {
                answer: 'Membuat rumah idaman',
                value: 'planningAndOrganizing'
            },
            { answer: 'Membeli pulau pribadi', value: 'creativeThinking' },
            { answer: 'Bertemu dengan idola', value: 'leadership' },
            { answer: 'Membuat banyak lapangan kerja', value: 'empathy' }
        ],
        answer: null
    },
    {
        title: 'text',
        question: 'Apa yang kamu sukai dari negara ini?',
        choice: [
            {
                answer: 'Budaya yang beraneka ragam',
                value: 'teamwork'
            },
            { answer: 'Kekayaan kuliner', value: 'criticalThinking' },
            { answer: 'Sumber daya alam yang berlimpah', value: 'resilience' },
            { answer: 'Banyaknya orang yang bertalenta', value: 'leadership' }
        ],
        answer: null
    },
    {
        title: 'text',
        question:
            'Jika terjadi peperangan di negara ini, apa yang akan kamu lakukan?',
        choice: [
            {
                answer: 'Mencoba untuk berdamai dengan pihak musuh',
                value: 'innovative'
            },
            { answer: 'Membantu mengevakuasi warga', value: 'leadership' },
            {
                answer: 'Menghubungi negara lain untuk membantu berperang',
                value: 'teamwork'
            },
            {
                answer: 'Mengajak warga untuk ikut berperang',
                value: 'communicative'
            }
        ],
        answer: null
    },
    {
        title: 'text',
        question: 'Saat terjadi krisis makanan, apa yang akan kamu lakukan?',
        choice: [
            {
                answer: 'Pergi ke daerah lain',
                value: 'riskTaking'
            },
            { answer: 'Mulai membuat pertanian', value: 'resilience' },
            {
                answer: 'Menunggu bantuan pemerintah',
                value: 'persistence'
            },
            {
                answer: 'Meminta makanan orang',
                value: 'communicative'
            }
        ],
        answer: null
    },
    {
        title: 'text',
        question:
            'Apa hal pertama yang akan kamu lakukan ketika kamu terdampar di pulau tidak berpenghuni?',
        choice: [
            {
                answer: 'Mencari hewan/tumbuhan untuk dimakan',
                value: 'persistence'
            },
            {
                answer: 'Membuat tempat yang bisa dihuni',
                value: 'complexProblemSolver'
            },
            {
                answer: 'Membuat tanda SOS',
                value: 'innovative'
            },
            {
                answer: 'Mencari sumber air terdekat',
                value: 'criticalThinking'
            }
        ],
        answer: null
    },
    {
        title: 'text',
        question:
            'Seandainya kamu memiliki kebun kopi, apa yang akan dilakukan?',
        choice: [
            {
                answer: 'Membuat coffee shop',
                value: 'planningAndOrganizing'
            },
            {
                answer: 'Membentuk komunitas petani kopi',
                value: 'teamwork'
            },
            {
                answer: 'Meng-ekspor biji kopi',
                value: 'riskTaking'
            },
            {
                answer: 'Membuat teknologi pasca-panen',
                value: 'visionary'
            }
        ],
        answer: null
    },
    {
        title: 'text',
        question: 'Peran kamu ketika berkemah bersama teman-teman adalah?',
        choice: [
            {
                answer: 'Membangun tenda',
                value: 'planningAndOrganizing'
            },
            {
                answer: 'Memasak makanan',
                value: 'empathy'
            },
            {
                answer: 'Membuat api unggun',
                value: 'teamwork'
            },
            {
                answer: 'Bersosialisasi dengan orang setempat',
                value: 'communicative'
            }
        ],
        answer: null
    },
    {
        title: 'text',
        question: 'Hal apa yang disukai ketika berada di hutan?',
        choice: [
            {
                answer: 'Karena banyaknya sumber daya',
                value: 'innovative'
            },
            {
                answer: 'Adanya potensi yang bisa digali',
                value: 'creativeThinking'
            },
            {
                answer: 'Masih ada suku pedalaman untuk bisa berinteraksi',
                value: 'communicative'
            },
            {
                answer: 'Hewan yang beraneka ragam',
                value: 'empathy'
            }
        ],
        answer: null
    },
    {
        title: 'text',
        question:
            'Ketika kamu bertemu dengan hewan buas, apa yang akan kamu lakukan?',
        choice: [
            {
                answer: 'Tenang dan mundur secara perlahan',
                value: 'criticalThinking'
            },
            {
                answer: 'Lari sekencang – kencangnya',
                value: 'resilience'
            },
            {
                answer: 'Naik ke atas pohon',
                value: 'complexProblemSolver'
            },
            {
                answer: 'Mengalihkan perhatian hewan tersebut',
                value: 'persistence'
            }
        ],
        answer: null
    }
];

export const listQuestionPos4: QuestionType[] = [
    {
        title: 'text',
        question: 'Kira kira apa yang sedang dia pikirkan…',
        choice: [
            {
                answer: 'Memikirkan tugas kelompok karena khawatir tidak merasa nyaman dengan kelompok baru',
                value: 'planningAndOrganizing'
            },
            {
                answer: 'Berpikir tentang ide konsep yang bisa diaplikasikan ke dalam usaha rintisannya.',
                value: 'innovative'
            },
            {
                answer: 'Mendekatkan diri dengan teman yang pandai agar tugas mudah selesai.',
                value: 'complexProblemSolver'
            }
        ],
        answer: null
    },
    {
        title: 'text',
        question: 'Tujuan bertemu ialah…',
        choice: [
            {
                answer: 'Mencari hiburan dengan canda tawa.',
                value: 'resilience'
            },
            {
                answer: 'Mencari solusi dengan membuka ruang diskusi.',
                value: 'visionary'
            },
            {
                answer: 'Menceritakan tentang lawan jenis yang ia sukai.',
                value: 'communicative'
            }
        ],
        answer: null
    },
    {
        title: 'text',
        question: 'Apa jawaban mahasiswa untuk membalas pesan tersebut?',
        choice: [
            {
                answer: 'Menanyakan tentang siapa seorang anonymous ini.',
                value: 'criticalThinking'
            },
            {
                answer: 'Mengajak bertemu secara langsung untuk mencari jawaban.',
                value: 'riskTaking'
            },
            {
                answer: 'Diam saja karena ini mungkin metode baru untuk melunasi tagihan pay-later.',
                value: 'communicative'
            }
        ],
        answer: null
    },
    {
        title: 'text',
        question: 'Mahasiswa tersebut menjawab…',
        choice: [
            {
                answer: 'Saya ingin melakukannya, lantas apa yang perlu dipersiapkan?',
                value: 'planningAndOrganizing'
            },
            {
                answer: 'Berikan saya penjelasan mengenai masa depan tersebut!',
                value: 'innovative'
            },
            {
                answer: 'Apa keuntungan secara materi yang bisa saya terima?',
                value: 'complexProblemSolver'
            }
        ],
        answer: null
    },
    {
        title: 'text',
        question: 'Apa saja yang dipersiapkan oleh mahasiswa itu…',
        choice: [
            {
                answer: 'Membuat rencana perjalanan secara detail untuk mendapatkan informasi',
                value: 'criticalThinking'
            },
            {
                answer: 'Menanyakan kepada ahli paranormal terkait informasi tersebut',
                value: 'riskTaking'
            },
            {
                answer: 'Menghubungi temannya yang aktif di komunitas pecinta alam untuk membantunya',
                value: 'teamwork'
            }
        ],
        answer: null
    },
    {
        title: 'text',
        question: 'Apa yang dirasakan oleh mahasiswa tersebut…',
        choice: [
            {
                answer: 'Ternyata cuaca dingin menguburkan niatnya untuk meneruskan perjalanan dan kembali pulang.',
                value: 'riskTaking'
            },
            {
                answer: 'Tekad untuk menyelamatkan semakin kuat karena tahu di masa depan semua ini akan musnah.',
                value: 'persistence'
            },
            {
                answer: 'Membayangkan hidup di masa tua untuk tinggal di desa ini. ',
                value: 'visionary'
            }
        ],
        answer: null
    },
    {
        title: 'text',
        question: 'Apa yang membuat dia begitu senang?',
        choice: [
            {
                answer: 'Rasa khas kopi daerah tersebut',
                value: 'empathy'
            },
            {
                answer: 'Ada sinyal dan bisa membuat konten di media sosial',
                value: 'creativeThinking'
            },
            {
                answer: 'Berinteraksi dengan pemilik warung kopi',
                value: 'leadership'
            }
        ],
        answer: null
    },
    {
        title: 'text',
        question:
            'Apa yang dia pikirkan ketika mengetahui kakek tersebut adalah seorang Paranormal',
        choice: [
            {
                answer: 'Apakah aku akan menjadi tumbal untuk persembahan kampung ini?',
                value: 'innovative'
            },
            {
                answer: 'Mungkin dia ingin memberikan sebuah informasi',
                value: 'resilience'
            },
            {
                answer: 'Aku berencana kabur melewati belakang gubuk warung kopi itu',
                value: 'planningAndOrganizing'
            }
        ],
        answer: null
    },
    {
        title: 'text',
        question:
            'Apa yang dia lakukan setelah melihat gelagat aneh kakek tersebut?',
        choice: [
            {
                answer: 'Aku harus menyiapkan pisau di belakang tanganku.',
                value: 'complexProblemSolver'
            },
            {
                answer: 'Aku akan memberikan bekal makanan di dalam kantongku, untuk mencairkan suasana.',
                value: 'creativeThinking'
            },
            {
                answer: 'Sepertinya dia senang bila aku tidak banyak bertanya.',
                value: 'empathy'
            }
        ],
        answer: null
    },
    {
        title: 'text',
        question:
            'Perasaan seperti apa yang muncul saat melihat gua di depannya?',
        choice: [
            {
                answer: 'Sambil menangis dan berdoa, dia mengikuti perjalanan dalam gua.',
                value: 'persistence'
            },
            {
                answer: 'Rasa penasaran memberikan semangat melewati gua tersebut.',
                value: 'leadership'
            },
            {
                answer: 'Sayangnya gua ini tidak dimanfaatkan untuk wisata horor, padahal ini bisa meningkatkan ekonomi penduduk di sini. ',
                value: 'creativeThinking'
            }
        ],
        answer: null
    },
    {
        title: 'text',
        question:
            'Apa yang mahasiswa pikirkan ketika menyaksikan kekejaman yang terjadi?',
        choice: [
            {
                answer: 'Melihat fenomena tersebut, mahasiswa ingin membantu penduduk desa untuk bangkit.',
                value: 'resilience'
            },
            {
                answer: 'Aku harus menemukan solusi untuk masa depan tersebut.',
                value: 'persistence'
            },
            {
                answer: 'Mengapa peran ini harus dimanfaatkan oleh perusahaan asing? Apa yang tidak bisa membuat penduduk desa memanfaatkan hasil bumi mereka?',
                value: 'creativeThinking'
            }
        ],
        answer: null
    },
    {
        title: 'text',
        question: 'Kesimpulan dan action plan mahasiswa tersebut…',
        choice: [
            {
                answer: 'Aku sadar selama ini, aku hanya mementingkan materi untuk kepentingan pribadi tanpa mengukur dampak yang akan terjadi pada masyarakat.',
                value: 'empathy'
            },
            {
                answer: 'Aku akan mendiskusikan semua ini dengan para stakeholder di kampus dan membuat program kerja nyata.',
                value: 'teamwork'
            },
            {
                answer: 'Aku ingin berteman dengan para aktivis lingkungan dan membuat campaign untuk menyebarkan kesadaran manusia.',
                value: 'visionary'
            }
        ],
        answer: null
    }
];
