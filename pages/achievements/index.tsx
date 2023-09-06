import React from 'react'
import Head from "next/head"
import Link from "next/link"

import Typography from "@/components/Typography"

const pubs = [
  {
    id: 1,
    name: 'Quinoline Alkaloids Against Neglected Tropical Diseases.',
    journal: 'Curr. Org. Chem. 2017, 21, 1896–1906. (IF 2.193)',
    authors: 'Musioł, R.; Malarz, K.; Mularski, J.',
    doi: '',
    doiLink: ''
  },
  {
    id: 2,
    name: 'Electrolytic copper as cheap and effective catalyst for one-pot triazole synthesis.',
    journal: 'Sci. Rep. 2018, 8, 4496. (IF 4.011)',
    authors: 'Mularski, J.; Czaplińska, B.; Cieślik, W.; Bebłot, J.; Bartczak, P.; Sitko, R.; Polański, J.; Musioł, R.',
    doi: '10.1038/s41598-018-22703-0',
    doiLink: 'https://www.nature.com/articles/s41598-018-22703-0'
  },
  {
    id: 3,
    name: 'The p53 stabilizing agent CP-31398 and multi-kinase inhibitors. Designing, synthesizing and screening of styrylquinazoline series.',
    journal: 'Eur. J. Med. Chem. 2019, 163, 610–625. (IF 5.572)',
    authors: 'Mularski, J.; Malarz, K.; Pacholczyk, M.; Musioł, R.',
    doi: '',
    doiLink: ''
  },
  {
    id: 4,
    name: 'The landscape of the anti-kinase activity of the IDH1 inhibitors.',
    journal: 'Cancers 2020, 12(3), 536. (IF 6.639)',
    authors: 'Malarz, K.; Mularski, J.; Pacholczyk, M.; Musioł, R.',
    doi: '',
    doiLink: ''
  },
  {
    id: 5,
    name: 'Novel benzenesulfonate scaffolds with a high anticancer activity and G2/M cell cycle arrest.',
    journal: 'Cancers 2021, 13(8), 1790. (IF 6.575)',
    authors: 'Malarz, K.; Mularski, J.; Musioł, R.',
    doi: '',
    doiLink: ''
  },
  {
    id: 6,
    name: 'Terpyridines as promising antitumor agents: an overview of their discovery and development.',
    journal: 'Expert Opin. Drug Discov. 2022, 17(3), 259–271. (IF 6.3)',
    authors: 'Mularski, J.; Pacholczyk, M.; Musioł, R.',
    doi: '',
    doiLink: ''
  },
  {
    id: 7,
    name: 'Styrylquinazoline derivatives as ABL inhibitors selective for different DFG orientations.',
    journal: 'J. Enzyme Inhib. Med. Chem. 2023, 38(1), 2201410. (IF 5.756)',
    authors: 'Malarz, K.; Mularski, J.; Pacholczyk, M.; Musiol, R.',
    doi: '10.1080/14756366.2023.2201410',
    doiLink: 'https://www.tandfonline.com/doi/full/10.1080/14756366.2023.2201410'
  },
  {
    id: 8,
    name: 'Highly efficient room-temperature oxidation of cyclohexene and d-glucose over nanogold Au/SiO2 in water.',
    journal: 'J. Catal. 2012, 295, 15-21. (IF 5.787)',
    authors: 'Bujak, P.; Bartczak, P.; Polański, J.',
    doi: '10.1016/j.jcat.2012.06.023',
    doiLink: 'https://www.sciencedirect.com/science/article/abs/pii/S0021951712001959?via%3Dihub'
  },
  {
    id: 9,
    name: 'Bimetallic nano-Pd/PdO/Cu system as a highly effective catalyst for the Sonogashira reaction.',
    journal: 'J. Catal. 2014, 313, 1-8. (IF 6.921)',
    authors: 'Korzec, M.; Bartczak, P.; Niemczyk, A.; Szade, J.; Kapkowski, M.; Zenderowska, P.; Balin, K.; Lelątko, J.; Polański, J.',
    doi: '10.1016/j.jcat.2014.02.008',
    doiLink: 'https://www.sciencedirect.com/science/article/abs/pii/S0021951714000475?via%3Dihub'
  },
  {
    id: 10,
    name: 'SiO2-, Cu-, and Ni-supported Au nanoparticles for selective glycerol oxidation in the liquid phase.',
    journal: 'J. Catal. 2014, 319, 110-118. (IF 6.921)',
    authors: 'Kapkowski, M.; Bartczak, P.; Korzec, M.; Sitko, R.; Szade, J.; Balin, K.; Lelątko, J.; Polański, J.',
    doi: '10.1016/j.jcat.2014.08.003',
    doiLink: ''
  },
  {
    id: 11,
    name: 'Synthesis of New Styrylquinoline Cellular Dyes, Fluorescent Properties, Cellular Localization and Cytotoxic Behavior.', journal: 'PLoS ONE 2015, 10(6): e0131210. (IF 3.057)',
    authors: 'Rams-Baron, M.; Dulski, M.; Mrozek-Wilczkiewicz, M.; Korzec, M.; Cieślik, W.; Spaczyńska, E.; Bartczak, P.; Ratuszna, A.; Polański, J.; Musioł, R.',
    doi: '10.1371/journal.pone.0131210',
    doiLink: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0131210'
  },
  {
    id: 12,
    name: 'Ni-Supported Pd Nanoparticles with Ca Promoter: A New Catalyst for Low-Temperature Ammonia Cracking.',
    journal: 'PLoS ONE 2015, 10(8): e0136805. (IF 3.057)',
    authors: 'Polański, J.; Bartczak, P.; Ambrożkiewicz, W.; Sitko, R.; Siudyga, T.; Mianowski, A.; Szade, J.; Balin, K.; Lelątko, J.',
    doi: '10.1371/journal.pone.0136805',
    doiLink: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0136805'
  },
  {
    id: 13,
    name: 'Catalytic Gas-Phase Glycerol Processing over SiO2-, Cu-, Ni- and Fe- Supported Au Nanoparticles.',
    journal: 'PLoS ONE 2015, 10(11): e0142668. (IF 3.057)',
    authors: 'Kapkowski, M.; Siudyga, T.; Sitko, R.; Lelątko, J.; Szade, J.; Balin, K.; Klimontko, J.; Bartczak, P.; Polański, J.', doi: '10.1371/journal.pone.0142668',
    doiLink: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0142668'
  },
  {
    id: 14,
    name: 'Oxide passivated Ni-supported Ru nanoparticles in silica: A new catalyst for low – temperature carbon dioxide methanation.',
    journal: 'Appl. Catal. B: Environ. 2017, 206, 16-23. (IF 11.698)',
    authors: 'Polański, J.; Siudyga, T.; Bartczak, P.; Kapkowski, M.; Ambrożkiewicz, W.; Nobis, A.; Sitko, R.; Klimontko, J.; Szade, J.; Lelątko, J.',
    doi: '10.1016/j.apcatb.2017.01.017',
    doiLink: 'http://dx.doi.org/10.1016/j.apcatb.2017.01.017'
  },
  {
    id: 15,
    name: 'Paracrystalline structure of gold, silver, palladium and platinum nanoparticles.',
    journal: 'J. Appl. Crystallogr. 2018, 51 (2), 411-419. (IF 3.161)',
    authors: 'Jurkiewicz, K.; Kamiński, M.; Glajcar, W.; Woźnica, N.; Julienne, F.; Bartczak, P.; Polański, J.; Lelątko, J.; Zubko, M.; Burian, A.',
    doi: '10.1107/S1600576718001723',
    doiLink: 'https://scripts.iucr.org/cgi-bin/paper?S1600576718001723'
  },
  {
    id: 16,
    name: 'A Study of Catalytic Oxidation of a Library of C2 to C4 Alcohols in the Presence of Nanogold.',
    journal: 'Nanomater. 2019, 9(3), 442. (IF 4.324)',
    authors: 'Kapkowski, M.; Niemczyk-Wojdyła, A.; Bartczak, P.; Pyrkosz Bulska, M.; Gajcy, K.; Sitko, R.; Zubko, M.; Szade, J.; Klimontko, J.; Balin, K.; Polański, J.',
    doi: '10.3390/nano9030442',
    doiLink: 'https://www.mdpi.com/2079-4991/9/3/442'
  },
  {
    id: 17,
    name: 'Ultra-low temperature carbon (di)oxide hydrogenation catalyzed by hybrid ruthenium-nickel nanocatalysts: towards sustainable methane production.',
    journal: 'Green Chem. 2020, 22, 5143-5150. (IF 10.182)',
    authors: 'Siudyga, T.; Kapkowski, M.; Bartczak, P.; Zubko, M.; Szade, J.; Balin, K.; Antoniotti, S.; Polanski, J.',
    doi: '10.1039/D0GC01332C',
    doiLink: 'https://pubs.rsc.org/en/content/articlelanding/2020/GC/D0GC01332C'
  },
  {
    id: 18,
    name: 'Ru and Ni – Privileged Metal Combination for Environmental Nanocatalysis.',
    journal: 'Catal. 2020, 992, 1-18. (IF = 4.146)',
    authors: 'Polański, J.; Lach, D.; Kapkowski, M.; Bartczak, P.; Siudyga, T.; Smoliński, A.',
    doi: '10.3390/catal10090992',
    doiLink: 'https://www.mdpi.com/2073-4344/10/9/992'
  },
  {
    id: 19,
    name: 'Catalytic Removal of NOx on Ceramic Foam-supported ZnO and TiO2 Nanorods Ornamented with W and V Oxides.',
    journal: 'Energies 2022, 15(5), 1798 (IF 3.2)',
    authors: 'Kapkowski, M.; Siudyga, T.; Bartczak, P.; Zubko, M.; Sitko, R.; Szade, J.; Balin, K.; Witkowski, B.; Ożga, M.; Pietruszka, R.; Godlewski, M.; Polański, J.',
    doi: '10.3390/en15051798',
    doiLink: 'https://www.mdpi.com/1996-1073/15/5/1798'
  },
]

const patents = [
  {
    id: 1,
    name: 'Pochodna chinazoliny i jej zastosowanie.',
    pathId: 'Pat.237263, 2020',
    authors: 'Mularski, J.; Malarz, K.; Musioł, R.',
  },
  {
    id: 2,
    name: 'Sposób otrzymywania saponiny pochodzenia roślinnego o wysokiej czystości i fizykochemicznej stabilnej formie.',
    pathId: 'Pat.234226, 2019',
    authors: 'Mularski, J.; Musioł, R.; Chowaniec, P.; Mularska, J.',
  },
  {
    id: 3,
    name: 'Sposób otrzymywania 1,4-dwupodstawionych triazoli w katalizowanej reakcji cykloaddycji.',
    pathId: 'Pat.236022, 2020',
    authors: 'Mularski, J.; Korzec, M.; Musioł, R.; Polański, J.; Cieślik, W.; Rzycka, R.; Czaplińska, B.; Bogocz, J.',
  },
  {
    id: 4,
    name: '1,3-benzodioksolo-5-sulfonylowa pochodna chinazoliny do zastosowania w leczeniu nowotworów.',
    pathId: 'Pat. 242765, 2023',
    authors: 'Musioł, R.; Mularski, J.; Malarz, K.',
  },
  {
    id: 5,
    name: 'Proszek składający się z nanocząsteczek srebra metalicznego osadzonych na nośniku krzemionkowym, sposób jego otrzymywania i zastosowanie.',
    pathId: 'EP2244973, 2012',
    authors: 'Czepelak, H.; Łanowy, W.; Malinowska-Kapcia, B.; Bartczak, P.; Kasprzycki, P.',
  },
  {
    id: 6,
    name: 'Sposób utylizacji gliceryny do kwasu octowego.',
    pathId: 'Pat.223367, 2015',
    authors: 'Kapkowski, M.; Bartczak, P.; Korzec, M.; Polański, J.',
  },
  {
    id: 7,
    name: 'Sposób wytwarzania testu do wykrywania kwasu gamma hydroksymasłowego oraz sposób wykrywania kwasu gamma hydroksymasłowego.',
    pathId: 'Pat.213310, 2012',
    authors: 'Paździorek, T.; Czepelak, H.; Pfeifer, A.; Bartczak, P.',
  },
  {
    id: 8,
    name: 'Nanokatalizator Pd/Cu, sposób jego otrzymywania oraz zastosowanie.',
    pathId: 'Pat.231568, 2018',
    authors: 'Bartczak, P.; Polański, J.; Korzec. M.; Kapkowski, M.',
  },
  {
    id: 9,
    name: 'Sposób otrzymywania skojarzonego nanomateriału metalicznego oraz jego zastosowanie.',
    pathId: 'Pat.230827, 2018',
    authors: 'Polański, J.; Bartczak, P.; Siudyga, T.; Mianowski, A.',
  },
  {
    id: 10,
    name: 'Sposób katalitycznej konwersji tlenku lub dwutlenku węgla do metanu oraz złoże katalityczne do realizacji tego sposobu.',
    pathId: 'Pat.240039, 2021',
    authors: 'Polański, J.; Siudyga, T.; Kapkowski, M.; Bartczak, P.',
  },
]

const splitString = (text: string, exp: string) => {
  const textArr = text.split(exp)
  return textArr
}

const underlineString = (dividedAuthors: string[]) => {
  return dividedAuthors.map((author, idx) => {
    if (author === 'Bartczak, P.' || author === 'Mularski, J.') {
      return (
        <span className="underline" key={idx}>{author}</span>
      )
    }

    return (
      <span key={idx}>{author}</span>
    )
  })
}

const mergeElements = (arrayOfElements: React.ReactElement[]) => {
  return arrayOfElements.map((element, idx) => {
    return (
      <React.Fragment key={idx}>
        {element}
        {idx !== arrayOfElements.length - 1 && '; '}
      </React.Fragment>
    )
  })
}

const formatAuthors = (authors: string) => {
  const dividedAuthors = splitString(authors, '; ')
  const underlinedAuthors = underlineString(dividedAuthors)
  const mergedAuthors = mergeElements(underlinedAuthors)
  return mergedAuthors
}

const index = () => {
  return (
    <>
      <Head>
        <title>
          Siltim Sp. z o.o. | Osiągnięcia
        </title>
      </Head>
      <section className="w-5/6 max-w-[1200px] mx-auto
        flex flex-col justify-center items-center pt-40"
      >
        <Typography 
          className="flex justify-center"
          variant="h3"
          as="h3"
        >
          Publikacje i patenty Założycieli firmy:
        </Typography>
        <Typography
          className="py-6"
          variant="h5"
          as="h5"
        >
          Wykaz publikacji
        </Typography>
        <Typography
          className="py-6"
          variant="body"
          as="ol"
        >
          {
            pubs.map((doc, idx) => {
              const { id, name, journal, authors, doi, doiLink } = doc
              return (
                <li
                  key={idx}
                  className='flex flex-col py-2'
                >
                  <div className="flex sm:gap-3 pb-2">
                    <span>
                      {id + '.'}
                    </span>
                    <span>
                      {name}
                    </span>
                  </div>
                  <span className='pl-2 sm:pl-10 italic'>
                    {journal}
                  </span>
                  <div className='pl-2 sm:pl-10'>
                    {
                      formatAuthors(authors)
                    }
                  </div>
                  {
                    doi && (
                      <span className='pl-2 sm:pl-10'>
                        <Link
                          href={doiLink}
                          passHref
                        >
                          <span className='pr-2'>DOI:</span>
                          {doi}
                        </Link>
                      </span>
                    )
                  }
                </li>
              )
            })
          }
        </Typography>
        <Typography
          className="py-6"
          variant="h5"
          as="h5"
        >
          Udzielone patenty
        </Typography>
        <Typography
          className="py-6"
          variant="body"
          as="ol"
        >
        {
            patents.map((doc, idx) => {
              const { id, name, pathId, authors } = doc
              return (
                <li
                  key={idx}
                  className='flex flex-col py-3'
                >
                  <div className="flex gap-3 pb-2">
                    <span>
                      {id}
                    </span>
                    <span>
                      {name}
                    </span>
                  </div>
                  <span className='pl-10 italic'>
                    {pathId}
                  </span>
                  <div className='pl-10'>
                    {
                      formatAuthors(authors)
                    }
                  </div>
                </li>
              )
            })
          }
        </Typography>
        <Typography
          className="pb-12"
          variant="body"
          as="p"
        >
          Powróć do <Link href="/" className="underline text-blue-500">Strony Głównej</Link>
        </Typography>
      </section>
    </>
    
  )
}

export default index