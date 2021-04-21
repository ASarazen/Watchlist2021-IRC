var config = {
    style: 'mapbox://styles/irc-digital/ckhfmd6qf0c1319teh39mu49x',
    accessToken: 'pk.eyJ1IjoiaXJjLWRpZ2l0YWwiLCJhIjoiY2tpeXZpN2w3MDhnbTJzdGRrYzh6bWp2MSJ9.NxoO79dAwnbg81pVf1wdVw',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: ' ',
    byline: ' ',
    footer: '© International Rescue Committee<br><br>Created with support from the <a href="https://www.mapbox.com/community/" target="_blank">Mapbox Community team</a>.',
    chapters: [
        {
            id: 'intro',
            description: '<b><a href="https://www.rescue.org/report/2021-emergency-watchlist" target="_blank">Watchlist 2021</a> highlights the countries that the International Rescue Committee (IRC) assesses to be at the greatest risk of a major deterioration in the humanitarian situation over the next year. The Watchlist draws on 85 quantitative and qualitative measures, including insights from IRC staff around the world.</b><br><br>Watchlist finds the greatest humanitarian emergencies of 2021 will almost all be neglected, long-standing crises that are at risk of reaching new lows over the next year. The IRC expects these countries to deteriorate even further due to the triple threat found in nearly all Watchlist countries: conflict, climate change and now COVID-19.<br><br>The IRC is launching Watchlist 2021 to raise the alarm about the unprecedented challenges facing the world in 2021. There is still time to prevent the worst outcomes, but immediate action is critical, before decades of hard-won progress on reducing poverty, hunger and disease is lost or even reversed.<br><br><i>The IRC is at work in over 40 countries and over 20 U.S. cities helping people to survive, reclaim control of their future, and strengthen their communities. Learn more about how the IRC responds to the world’s worst humanitarian crises at <a href="https://www.rescue.org/" target="_blank">Rescue.org</a>.</i>',
            location: {
                center: [-77.42306, 40.72311],
                zoom: 1.20,
                pitch: 0.00,
                bearing: 0.00,
                bbox: [[-190,-38.272], [79.453,45.089]]
            },
            onChapterEnter: [
                {
                    layer: 'Yemen',
                    opacity: 1
                },
                {
                    layer: 'Afghanistan',
                    opacity: 1
                },
                {
                    layer: 'Syria',
                    opacity: 1
                },
                {
                    layer: 'DRC',
                    opacity: 1
                },
                {
                    layer: 'BurkinaFaso',
                    opacity: 1
                },
                {
                    layer: 'SouthSudan',
                    opacity: 1
                },
                {
                    layer: 'Nigeria',
                    opacity: 1
                },
                {
                    layer: 'Venezuela',
                    opacity: 1
                },
                {
                    layer: 'Ethiopia',
                    opacity: 1
                },
                {
                    layer: 'Mozambique',
                    opacity: 1
                },
                {
                    layer: 'Unranked',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Yemen',
                    opacity: 0
                },
                {
                    layer: 'Afghanistan',
                    opacity: 0
                },
                {
                    layer: 'Syria',
                    opacity: 0
                },
                {
                    layer: 'DRC',
                    opacity: 0
                },
                {
                    layer: 'BurkinaFaso',
                    opacity: 0
                },
                {
                    layer: 'SouthSudan',
                    opacity: 0
                },
                {
                    layer: 'Nigeria',
                    opacity: 0
                },
                {
                    layer: 'Venezuela',
                    opacity: 0
                },
                {
                    layer: 'Ethiopia',
                    opacity: 0
                },
                {
                    layer: 'Mozambique',
                    opacity: 0
                },
                {
                    layer: 'Unranked',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Yemen',
            title: '1. Yemen: Unrelenting conflict and risk of famine',
            description: '<b>Yemen tops Watchlist for the third year in a row as the world’s largest humanitarian crisis reaches new lows.</b> The conflict remains intense five years after the Saudi and Emirati-led Coalition’s intervention to support the Internationally Recognized Government against the Ansar Allah movement.<br><br>In 2020, conflict escalated in Jawf and Marib governorates, despite the latter hosting one million IDPs. Hospitals, homes, and other critical civilian infrastructure are regularly damaged or destroyed by fighting, driving up civilian harm. In fact, Yemenis are more likely to be killed in their homes than anywhere else. Food insecurity is rising and WFP has warned that Yemen could face famine in 2021.<br><br><b>Despite rising need, the humanitarian response is on the brink of collapse due to underfunding</b>; three-quarters of major UN programs reduced or shut down in 2020 and 3 million fewer Yemenis were receiving aid each month by late 2020 compared to the beginning of the year.',
            location: {
                center: [41.80409, 15.70445],
                zoom: 5.00,
                pitch: 0.00,
                bearing: 0.00,
                bbox: [[29.066, 12.576], [54.097, 19.1244]]
            },
            onChapterEnter: [
                {
                    layer: 'Yemen',
                    opacity: 1
                },
                {
                    layer: 'yemen-marib',
                    opacity: 1
                },
                {
                    layer: 'label_Yemen',
                    opacity: 1
                },
                {
                    layer: 'label_Yemen_marib',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Yemen',
                    opacity: 0
                },
                {
                    layer: 'yemen-marib',
                    opacity: 0
                },
                {
                    layer: 'label_Yemen',
                    opacity: 0
                },
                {
                    layer: 'label_Yemen_marib',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Afghanistan',
            title: '2. Afghanistan: Stalled peace process under threat',
            description: 'Even after four decades of crises, <b>Afghanistan has risen to second on Watchlist because of its high exposure to the triple threats of conflict, COVID-19 and climate change.</b> These factors led the number of people in need to nearly double between early 2020 and 2021.<br><br>Afghanistan ranked last on the 2020 Global Peace Index. Needs could rise rapidly in 2021 if peace talks between the Taliban and Afghan government break down and conflict escalates. Fighting in late 2020 in Helmand province displaced 35,000 and could indicate a larger escalation in conflict in 2021.<br><br><b>The pandemic and climate-related disasters are exacerbating needs for Afghans, many of whom have lived through decades of conflict, chronic poverty, economic crises, and protracted displacement.</b> An additional 6 million people could face poverty and 3 million more could become food insecure due to the pandemic. 42% of the population is expected to face crisis or worse levels of food insecurity in 2021, making it the fifth-highest food insecurity crisis in terms of proportion of the population affected. Women are disproportionately affected by these crises and IRC staff report concerning increases in child labor, violence against women and children and early marriage.',
            location: {
                center: [61.76235, 33.46065],
                zoom: 5.00,
                pitch: 0.00,
                bearing: 0.00,
                bbox: [[45.966, 28.844], [75.585, 39.707]]
            },
            onChapterEnter: [
                {
                    layer: 'Afghanistan',
                    opacity: 1
                },
                {
                    layer: 'AF-region',
                    opacity: 1
                },
                {
                    layer: 'label_Afghanistan',
                    opacity: 1
                },
                {
                    layer: 'label_AF_region',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Afghanistan',
                    opacity: 0
                },
                {
                    layer: 'AF-region',
                    opacity: 0
                },
                {
                    layer: 'label_Afghanistan',
                    opacity: 0
                },
                {
                    layer: 'label_AF_region',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Syria',
            title: '3. Syria: The deadliest place for humanitarians',
            description: '<b>2021 marks a decade of conflict in Syria.</b> Despite its protracted nature the crisis remains volatile. The most likely trigger for major instability in 2021 is conflict in the northwest, particularly Idleb, where conflict displaced over one million people in late 2019 and early 2020 in the largest displacement in the war yet.<br><br>Conflict in Syria is fought all too often with disregard for International Humanitarian Law with Syria reporting the world’s highest number of attacks on aid workers and aid worker deaths in 2019. Health facilities continue to be targeted even during the pandemic. Ten years of war has also undermined Syrians’ ability to cope with COVID-19 and the worst economic crisis to hit Syria since the conflict began. Over four million Syrians relied on cross-border operations to receive humanitarian aid and yet, in 2020, the UN Security Council failed to authorize continued usage of three out of four border crossings that humanitarians had relied on for years. The loss in access will prevent humanitarians from meeting all needs in 2021 and scaling up if the crisis worsens.',
            location: {
                center: [34.99145, 34.83531],
                zoom: 5.50,
                pitch: 0.00,
                bearing: 0.00,
                bbox: [[28.125,32.138], [42.670,37.509]]
            },
            onChapterEnter: [
                {
                    layer: 'Syria',
                    opacity: 1
                },
                {
                    layer: 'SY-region',
                    opacity: 1
                },
                {
                    layer: 'label_Syria',
                    opacity: 1
                },
                {
                    layer: 'label_SY_region',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Syria',
                    opacity: 0
                },
                {
                    layer: 'SY-region',
                    opacity: 0
                },
                {
                    layer: 'label_Syria',
                    opacity: 0
                },
                {
                    layer: 'label_SY_region',
                    opacity: 0
                }
            ]
        },
        {
            id: 'DRC',
            title: '4. DRC: Highest number of people facing severe acute food insecurity ever recorded',
            description: 'The DRC ranks in the top five of Watchlist for the third year in a row, reflecting persistent volatility in a country that is now in its <b>fourth decade of a major humanitarian crisis.</b> The humanitarian situation is still constantly evolving and deteriorating, principally due to conflict.<br><br>The DRC was the second deadliest of the Watchlist countries for civilians in 2020. In the first half of 2020, over 1.4 million people were displaced by conflict in eastern DRC, mostly in North Kivu and Ituri, and this total is second only to Syria globally. 2020 also saw the conclusion of the DRC&apos;s tenth Ebola outbreak in eastern DRC, the start and end of the country&apos;s eleventh Ebola outbreak in western DRC and the arrival of COVID-19.<br><br><b>Weak health infrastructure in many areas</b>, particularly low vaccination coverage, <b>means that disease outbreaks are a constant risk for 2021.</b> Conflict, economic struggles and the consequences of the COVID-19 pandemic are all driving up food insecurity. The DRC faces the highest level of food insecurity ever recorded in any country. Despite high need, the UN’s Humanitarian Response Plan for the DRC has become more underfunded each year since 2015.',
            location: {
                center: [13.82306, -5.37914],
                zoom: 4.28,
                pitch: 0.00,
                bearing: 0.00,
                bbox: [[-8.613,-15.114], [33.376,5.266]]
            },
            onChapterEnter: [
                {
                    layer: 'DRC',
                    opacity: 1
                },
                {
                    layer: 'label_DRC',
                    opacity: 1
                },
                {
                    layer: 'DRC-region',
                    opacity: 1
                },
                {
                    layer: 'label_DRC_region',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'DRC',
                    opacity: 0
                },
                {
                    layer: 'label_DRC',
                    opacity: 0
                },
                {
                    layer: 'DRC-region',
                    opacity: 0
                },
                {
                    layer: 'label_DRC_region',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Ethiopia',
            title: '5. Ethiopia: New conflict threatens the region',
            description: 'Ethiopia features on the Watchlist for the third year in a row but rises into the top five for the first time due to escalating conflict that has contributed to Ethiopia becoming the second largest humanitarian crisis in the world. A major confrontation is underway in the northern Tigray region between the federal government and the Tigray People’s Liberation Front, which ruled the Tigray region for the past 29 years. Conflict in Tigray has already sparked a rapid increase in humanitarian needs and has the potential to allow greater instability across other parts of Ethiopia and the region, particularly Sudan and Somalia. The UN estimates that <b>9 million people are living in areas that could be affected by fighting.<br><br>The IRC and other NGOs are planning for as many as 2 million people to be displaced internally and for around 400,000 to flee to neighboring Sudan.</b> The rapid escalation in Tigray comes at a particularly delicate time for the country. COVID-19 has exacerbated needs and additional shocks are likely to occur in 2021 due to climate change, political tensions, and the fact that Ethiopia is at the epicenter of the biggest locust outbreak in living memory. At least 1 million Ethiopians suffered crop losses due to the locusts. As a result, over a quarter of Ethiopians are forecast to be facing crisis or worse levels of food insecurity in the first half of 2021.',
            location: {
                center: [35.14192, 8.92306],
                zoom: 4.80,
                pitch: 0.00,
                bearing: 0.00,
                bbox: [[20.742,2.196], [49.131,15.623]]
            },
            onChapterEnter: [
                {
                    layer: 'Ethiopia',
                    opacity: 1
                },
                {
                    layer: 'ET-region',
                    opacity: 1
                },
                {
                    layer: 'label_Ethiopia',
                    opacity: 1
                },
                {
                    layer: 'label_ET_region',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Ethiopia',
                    opacity: 0
                },
                {
                    layer: 'ET-region',
                    opacity: 0
                },
                {
                    layer: 'label_Ethiopia',
                    opacity: 0
                },
                {
                    layer: 'label_ET_region',
                    opacity: 0
                }
            ]
        },
        {
            id: 'BurkinaFaso',
            title: '6. Burkina Faso: The world’s fastest-growing displacement crisis',
            description: 'Burkina Faso entered the IRC’s Watchlist for the first time last year and has risen to six this year as conflict activity continues to rise rapidly and spread. Just two years ago, Burkina Faso faced virtually no mass conflict or displacement. But in the first half of 2020, the country was reporting the third-largest increase in IDPs in the world - surpassed only by Syria and the DRC. <b>Over 1 million Burkinabes are now internally displaced.</b><br><br>Burkina Faso has also become one of the deadliest places for civilians, with a range of militant groups, communal militias and official security forces implicated in the killings. Conflict activity is highest in northern and eastern parts of the country, particularly the Sahel region. There is a risk of instability spreading into other neighboring states, such as Côte d’Ivoire and Ghana.<br><br><b>Conflict-driven needs are set to grow even further in 2021</b> and will be compounded by the economic impacts of the COVID-19 pandemic. The number of people facing crisis or worse levels of food insecurity has more than tripled compared to pre-COVID levels. Burkina Faso’s food insecurity crisis is now the most severe in the world at present, with at least 11,000 Burkinabes now experiencing the worst (“catastrophe”) levels of food insecurity. The UN is now warning Burkina Faso is one of four countries at risk of famine.',
            location: {
                center: [-5.17094, 12.27290],
                zoom: 5.58,
                pitch: 0.00,
                bearing: 0.00,
                bbox: [[-12.128,8.233], [2.900,15.368]]
            },
            onChapterEnter: [
                {
                    layer: 'BurkinaFaso',
                    opacity: 1
                },
                {
                    layer: 'BF-region',
                    opacity: 1
                },
                {
                    layer: 'label_BurkinaFaso',
                    opacity: 1
                },
                {
                    layer: 'label_BF_region',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'BurkinaFaso',
                    opacity: 0
                },
                {
                    layer: 'BF-region',
                    opacity: 0
                },
                {
                    layer: 'label_BurkinaFaso',
                    opacity: 0
                },
                {
                    layer: 'label_BF_region',
                    opacity: 0
                }
            ]
        },
        {
            id: 'SouthSudan',
            title: '7. South Sudan: Recovery from civil war at risk',
            description: '<b>COVID-19 has arrived in South Sudan at a particularly delicate moment.</b> A new unity government took office in early 2020 and faces the challenge of leading the country’s recovery from large-scale civil conflict amid persistent localized conflict, economic crises and now an unprecedented pandemic. The 2018 peace deal remains fragile going into 2021 and even if it holds, localized conflict will continue, with civilian populations and humanitarians caught in the middle. The COVID-19 outbreak is occuring in one of the world’s weakest health systems, where NGOs provide 80% of health services and over half of the population has no access to primary health services.<br><br><b>A perfect storm of crises - persistent conflict, desert locust swarms, an economic crisis, recurrent flooding and COVID-19 has left more than half of the population facing acute food insecurity and increased the risk of famine in 2021.</b> Humanitarians’ ability to meet these needs is challenged by persistent conflict and constraints on their access; South Sudan had the second-highest number of attacks on aid workers in 2019 and topped the list in each of the previous five years.',
            location: {
                center: [25.65318, 7.68913],
                zoom: 5.30,
                pitch: 0.00,
                bearing: 0.00,
                bbox: [[14.875,1.757], [37.210,12.640]]
            },
            onChapterEnter: [
                {
                    layer: 'SouthSudan',
                    opacity: 1
                },
                {
                    layer: 'label_SouthSudan',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'SouthSudan',
                    opacity: 0
                },
                {
                    layer: 'label_SouthSudan',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Nigeria',
            title: '8. Nigeria: Conflict and famine risk in the northeast',
            description: '<b>Nigeria’s ranking among the top ten on Watchlist is primarily due to the crisis in the northeast (Borno, Adamawa, and Yobe states), where two-thirds of the region’s population of 13.4 million are in need of assistance.</b>  Humanitarian needs are only growing and deepening after ten years of conflict. The conflict has driven large-scale displacement and high levels of food insecurity, threatening famine conditions in the northeast in 2021.<br><br>Violence has also been rising in other parts of northern Nigeria, particularly in the northern states of Kaduna and Katsina due to conflict involving communal and criminal groups. <b>Civilians are bearing the brunt of the conflict</b>; in 2020 Nigeria was the deadliest of all twenty Watchlist countries for civilians. The first nine months saw more civilian casualties in the Northeast than during the same period in any year since 2015. Despite rising needs, Nigeria remains a challenging operating environment for humanitarians, with many roads in the Northeast too dangerous for travel and over a million people inaccessible.',
            location: {
                center: [3.72099, 8.86042],
                zoom: 5.16,
                pitch: 0.00,
                bearing: 0.00,
                bbox: [[-11.095,9.350], [16.941,11.081]]
            },
            onChapterEnter: [
                {
                    layer: 'Nigeria',
                    opacity: 1
                },
                {
                    layer: 'label_Nigeria',
                    opacity: 1
                },
                {
                    layer: 'NG-region',
                    opacity: 1
                },
                {
                    layer: 'label_NG_region',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Nigeria',
                    opacity: 0
                },
                {
                    layer: 'label_Nigeria',
                    opacity: 0
                },
                {
                    layer: 'NG-region',
                    opacity: 0
                },
                {
                    layer: 'label_NG_region',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Venezuela',
            title: '9. Venezuela: COVID-19 compounds years-long economic crisis',
            description: '<b>COVID-19 – and the restrictions and wider humanitarian crises it is creating – are deepening needs inside Venezuela, driving new humanitarian, political and economic crises for the country, and compounding one of the largest external displacements in the world.</b> Venezuela is five years into a spiraling economic crisis that has devastated the health system and caused catastrophic shortages of basic items.<br><br>The pandemic has now created the conditions for deepening poverty, food insecurity and malnutrition in 2021 in what was already the world’s fourth-largest food crisis. COVID-19 restrictions leave Venezuelans stuck in limbo as needs deepen inside the country but they are unable to leave to seek safety or services abroad. Meanwhile, lockdowns in Latin America are forcing displaced Venezuelans to return home to a country unable to meet existing needs; at least 130,000 Venezuelans abroad returned home in 2020. These factors are likely to worsen already high tensions and grievances. By September 2020 Venezuela averaged an estimated 40 protests a day – nearly a doubling since July.',
            location: {
                center: [-73.22380, 7.40911],
                zoom: 4.57,
                pitch: 0.00,
                bearing: 0.00,
                bbox: [[-83.896,-0.063], [-58.623,12.297]]
            },
            onChapterEnter: [
                {
                    layer: 'Venezuela',
                    opacity: 1
                },
                {
                    layer: 'label_Venezuela',
                    opacity: 1
                },
                {
                    layer: 'VE-region',
                    opacity: 1
                },
                {
                    layer: 'label_VE_region',
                    opacity: 1
                },
                {
                    layer: 'CO-VE_boundary',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Venezuela',
                    opacity: 0
                },
                {
                    layer: 'label_Venezuela',
                    opacity: 0
                },
                {
                    layer: 'VE-region',
                    opacity: 0
                },
                {
                    layer: 'label_VE_region',
                    opacity: 0
                },
                {
                    layer: 'CO-VE_boundary',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Mozambique',
            title: '10. Mozambique: Humanitarian needs rise rapidly as insurgency intensifies',
            description: '<b>Rapidly escalating conflict in northern Mozambique is the key factor that has pushed the country not just onto Watchlist for the first time, but straight into the list’s top ten countries of most concern.</b> An insurgency broke out in the northern Cabo Delgado province in late 2018 and has intensified markedly in 2020, triggering a rapid increase in violence, civilian harm and internal displacements. Over 500,000 people have been displaced by the crisis - a quadrupling in 2020 alone. The situation in Cabo Delgado is still opaque and reflects decades of perceived marginalization and under-investment in what remains Mozambique’s poorest region. Moreover, the country is still struggling to recover from two cyclones that struck the country in 2019 and damaged critical infrastructure such as health facilities. The number of people in need has nearly doubled for 2021 compared to early 2020. Needs may rise higher as conflict, natural disasters, and COVID-19 continue to harm livelihoods and exacerbate food insecurity in 2021. At the same time, conflict and restrictions imposed by the security forces are limiting efforts to reach people in need.',
            location: {
                center: [28.37229, -18.60233],
                zoom: 4.57,
                pitch: 0.00,
                bearing: 0.00,
                bbox: [[20.126,-27.215], [41.396,-9.882]]
            },
            onChapterEnter: [
                {
                    layer: 'Mozambique',
                    opacity: 1
                },
                {
                    layer: 'label_Mozambique',
                    opacity: 1
                },
                {
                    layer: 'MZ-region',
                    opacity: 1
                },
                {
                    layer: 'label_MZ_region',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Mozambique',
                    opacity: 0
                },
                {
                    layer: 'label_Mozambique',
                    opacity: 0
                },
                {
                    layer: 'MZ-region',
                    opacity: 0
                },
                {
                    layer: 'label_MZ_region',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Unranked',
            title: ' ',
            image: './images/Bottom10-Unranked-ChapterIntro.jpg',
            description: ' ',            
            location: {
                center: [-77.42306, 40.72311],
                zoom: 1.20,
                pitch: 0.00,
                bearing: 0.00,
                bbox: [[-190,-38.272], [79.453,45.089]]
            },
            onChapterEnter: [
                {
                    layer: 'Yemen',
                    opacity: 1
                },
                {
                    layer: 'Afghanistan',
                    opacity: 1
                },
                {
                    layer: 'Syria',
                    opacity: 1
                },
                {
                    layer: 'DRC',
                    opacity: 1
                },
                {
                    layer: 'BurkinaFaso',
                    opacity: 1
                },
                {
                    layer: 'SouthSudan',
                    opacity: 1
                },
                {
                    layer: 'Nigeria',
                    opacity: 1
                },
                {
                    layer: 'Venezuela',
                    opacity: 1
                },
                {
                    layer: 'Ethiopia',
                    opacity: 1
                },
                {
                    layer: 'Mozambique',
                    opacity: 1
                },
                {
                    layer: 'Unranked',
                    opacity: 1
                },
                {
                    layer: 'Unranked-region',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Yemen',
                    opacity: 0
                },
                {
                    layer: 'Afghanistan',
                    opacity: 0
                },
                {
                    layer: 'Syria',
                    opacity: 0
                },
                {
                    layer: 'DRC',
                    opacity: 0
                },
                {
                    layer: 'BurkinaFaso',
                    opacity: 0
                },
                {
                    layer: 'SouthSudan',
                    opacity: 0
                },
                {
                    layer: 'Nigeria',
                    opacity: 0
                },
                {
                    layer: 'Venezuela',
                    opacity: 0
                },
                {
                    layer: 'Ethiopia',
                    opacity: 0
                },
                {
                    layer: 'Mozambique',
                    opacity: 0
                },
                {
                    layer: 'Unranked',
                    opacity: 0
                },
                {
                    layer: 'Unranked-region',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Cameroon',
            title: 'Cameroon: Caught in the middle of dual conflicts',
            description: '<b>Cameroon’s continued presence on Watchlist is rooted in two distinct violent conflicts in the Northwest/Southwest regions and the Far North, which have left over a million people internally displaced and have no end in sight.</b> Conflict persists in the Northwest and Southwest regions between separatists and the government, rooted in longstanding grievances including the marginalization of the minority English-speaking regions. Meanwhile, the Far North is experiencing violence driven by armed groups based in the Lake Chad Basin.<br><br><b>Cameroon has seen a rapid rise in humanitarian needs, from 2.9 million people in need in December 2016 to 4 million in 2021.</b> Yet, Cameroon is an increasingly challenging environment for humanitarians. Attacks on aid workers in Cameroon rose sharply in 2020 with 19 attacks – more than double the attacks in the previous decade combined. Cameroon is also one of most underfunded humanitarian responses in the world. The lack of progress towards political solutions and continued violence are likely to result in further displacement and increases in humanitarian needs in 2021.',
            location: {
                center: [7.17674, 7.41476],
                zoom: 5.05,
                pitch: 0.00,
                bearing: 0.00,
                bbox: [[-3.164,1.318], [16.123,13.868]]
            },
            onChapterEnter: [
                {
                    layer: 'Cameroon',
                    opacity: 1
                },
                {
                    layer: 'label_Cameroon',
                    opacity: 1
                },
                {
                    layer: 'CM-region',
                    opacity: 1
                },
                {
                    layer: 'label_CM_region',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Cameroon',
                    opacity: 0
                },
                {
                    layer: 'label_Cameroon',
                    opacity: 0
                },
                {
                    layer: 'CM-region',
                    opacity: 0
                },
                {
                    layer: 'label_CM_region',
                    opacity: 0
                }
            ]
        },
        {
            id: 'CAR',
            title: 'Central African Republic: Rising needs in a forgotten crisis',
            description: 'CAR’s inclusion on Watchlist 2021 is driven both by the persistent armed conflict within the country and the extreme vulnerability of the population and the country’s limited response capacity to any additional shocks in 2021. <b>Acute needs are already at the highest level for the past five years due to a combination of conflict, COVID-19, economic conditions and natural events.</b> CAR saw major conflict after armed groups overran the capital in 2013 and, while the situation has since calmed, armed groups continue to control large swathes of territory, driving widespread instability. A quarter of the population remains displaced - internally or abroad.<br><br>While most armed groups continue to observe the 2019 peace deal, it has come under growing pressure as political tensions intensified in 2020. At the same time, CAR also ranks in the top five countries most vulnerable to the impacts of climate change (ND-GAIN) and there is a persistent risk of natural events sparking new crises. Over half of the population is already expected to need humanitarian assistance in 2021 (<a href="https://reliefweb.int/sites/reliefweb.int/files/resources/hno_car_2021_final_fr.pdf" target="_blank">OCHA</a>) and this number could rise rapidly if there is any recurrence of major conflict or natural disasters.',
            location: {
                center: [15.05726, 7.36140],
                zoom: 5.00,
                pitch: 0.00,
                bearing: 0.00,
                bbox: [[1.230,0.878], [28.597,11.350]]
            },
            onChapterEnter: [
                {
                    layer: 'CAR',
                    opacity: 1
                },
                {
                    layer: 'label_CAR',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'CAR',
                    opacity: 0
                },
                {
                    layer: 'label_CAR',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Chad',
            title: 'Chad: On the frontlines of climate change and conflict',
            description: '<b>COVID-19, climate change and rising conflict are all driving up the humanitarian risks facing Chad in 2021.</b> Chad is a major host of refugees from other countries on this year’s Watchlist, particularly from Sudan, Central African Republic, and Nigeria. The country, particularly its Lac region, is also itself affected by the conflict in the Lake Chad Basin region, which includes Nigeria, Niger, and Cameroon (all on Watchlist 2021), as well as several more localized conflicts that are often driven by struggles over resources.<br><br><b>2020 was Chad’s deadliest year for conflict and political violence in over a decade.</b> Conflict is highest in the Lac region in western Chad, where violence led to 336,000 IDPs by October 2020 - a 93% increase compared to 2019. Instability may well worsen ahead of planned presidential elections in 2021. At the same time, Chad is the most vulnerable country in the world to climate change. As climate change and the economic impacts of COVID-19 put ever greater pressure on the population, food insecurity may rise in 2021.',
            location: {
                center: [9.36556, 15.23458],
                zoom: 4.60,
                pitch: 0.00,
                bearing: 0.00,
                bbox: [[0.878,7.275], [24.873,23.322]]
            },
            onChapterEnter: [
                {
                    layer: 'Chad',
                    opacity: 1
                },
                {
                    layer: 'label_Chad',
                    opacity: 1
                },
                {
                    layer: 'TD-region',
                    opacity: 1
                },
                {
                    layer: 'label_TD_region',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Chad',
                    opacity: 0
                },
                {
                    layer: 'label_Chad',
                    opacity: 0
                },
                {
                    layer: 'TD-region',
                    opacity: 0
                },
                {
                    layer: 'label_TD_region',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Colombia',
            title: 'Colombia: Peace deal at risk from renewed violence',
            description: '<b>Colombia is a new addition to Watchlist this year due to increasing violence as well as COVID-19&apos;s devastating impact on displaced Venezuelans and Colombian host communities.</b> Criminal and armed groups are seeking to exploit the pandemic to expand their influence and, unchecked, the violence threatens fragile progress made in the peace accord between the government and the country’s main armed group, the Revolutionary Armed Forces of Colombia (FARC), to end a decades-long civil conflict. 2020 saw a steep rise in internal displacements, murders of social leaders, forced child recruitments, and massacres. At the same time, Colombia is the second-largest host country in the world, welcoming 1.8 million Venezuelans.<br><br>The economic impacts of COVID-19 are now eliminating livelihoods and exacerbating food insecurity, particularly for displaced Venezuelans; 84% of displaced populations at risk of some level of food insecurity. The pandemic has also led to a sharp rise in xenophobia towards Venezuelans. These tensions and escalating violence set the stage for greater social unrest and conflict in 2021. Social tensions could worsen in late 2021 as border restrictions and lockdowns ease and the number of Venezuelans entering Colombia is likely to drastically increase.',
            location: {
                center: [-81.00285, 4.01085],
                zoom: 4.55,
                pitch: 0.00,
                bearing: 0.00,
                bbox: [[-90.791,-4.915], [-65.621,13.410]]
            },
            onChapterEnter: [
                {
                    layer: 'Colombia',
                    opacity: 1
                },
                {
                    layer: 'label_Colombia',
                    opacity: 1
                },
                {
                    layer: 'CO-region',
                    opacity: 1
                },
                {
                    layer: 'label_CO_region',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Colombia',
                    opacity: 0
                },
                {
                    layer: 'label_Colombia',
                    opacity: 0
                },
                {
                    layer: 'CO-region',
                    opacity: 0
                },
                {
                    layer: 'label_CO_region',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Lebanon',
            title: 'Lebanon: Explosion adds to spiraling economic crisis',
            description: '<b>Lebanon was already in crisis when the August 2020 explosion in Beirut pushed the country to a breaking point, with wide ranging political, economic, and humanitarian implications.</b> The country faces a spiraling economic crisis, a rampantly spreading COVID-19 outbreak, rising social unrest, and the continued spillover effects of the protracted conflict in neighboring Syria. The Lebanese pound lost 80% of its value in 2020 and 45% of the Lebanese population is at risk of becoming impoverished in the coming months due to COVID-19 and the explosion. The price of a monthly food basket more than doubled in 2020, making it even more difficult for people to afford food as they simultaneously face lost incomes.<br><br><b>The 1.5 million Syrian refugees living in the country as well as migrant workers, women and girls and other vulnerable populations will be particularly affected.</b> Ongoing political and economic crises show no signs of progress to alleviate the humanitarian crisis in the immediate term. The government’s resignation following the Beirut port blast creates new uncertainty over the country’s future as a new government takes power and faces a rapidly deteriorating situation.',
            location: {
                center: [34.64288, 33.89845],
                zoom: 7.46,
                pitch: 0.00,
                bearing: 0.00,
                bbox: [[33.574,32.953], [36.750,34.723]]
            },
            onChapterEnter: [
                {
                    layer: 'Lebanon',
                    opacity: 1
                },
                {
                    layer: 'label_Lebanon',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Lebanon',
                    opacity: 0
                },
                {
                    layer: 'label_Lebanon',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Mali',
            title: 'Mali: Fragile transition begins amid rising conflict',
            description: '<b>Rising violence in the tri-border area, between Mali, Burkina Faso and Niger, is the key reason Mali features on Watchlist.</b> Mali has faced persistent insecurity since 2011. Conflict activity has grown rapidly since 2016, driven almost entirely by rapidly growing violence in the regions bordering Burkina Faso and Niger. Violence has also spread to the center of the country and increasingly the south as well. The central Mopti region is the worst affected. 2.9 million people - nearly 70% of the population - are affected by the crisis.<br><br><b>Humanitarians’ ability to meet rising needs is increasingly hampered by access constraints, particularly threats to their safety.</b> Since the start of 2019, more aid workers have been reported kidnapped in Mali than any other country in the world. Adding to the unstable situation in Mali, members of the armed forces ousted President Ibrahim Boubacar Keïta in August 2020. Mali may see uncertainty and risk of instability over the coming year as 2021 represents a critical transitional period for the country until elections due in early 2022. This transition will be further strained by COVID-19 and its wider economic harm.',
            location: {
                center: [-11.34385, 17.65670],
                zoom: 4.64,
                pitch: 0.00,
                bearing: 0.00,
                bbox: [[-27.861,9.795], [5.482,25.720]]
            },
            onChapterEnter: [
                {
                    layer: 'Mali',
                    opacity: 1
                },
                {
                    layer: 'label_Mali',
                    opacity: 1
                },
                {
                    layer: 'ML-region',
                    opacity: 1
                },
                {
                    layer: 'label_ML_region',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Mali',
                    opacity: 0
                },
                {
                    layer: 'label_Mali',
                    opacity: 0
                },
                {
                    layer: 'ML-region',
                    opacity: 0
                },
                {
                    layer: 'label_ML_region',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Niger',
            title: 'Niger: Instability in Sahel pushes conflict to record levels',
            description: '<b>Niger is caught in the middle of two distinct conflicts, with the Central Sahel crisis affecting western Niger and the Lake Chad Basin crisis spilling over into the East of the country.</b> Violence is rising rapidly in the country’s western Tillaberi and Tahoua regions, which sit in the tri-border area with Burkina Faso and Mali. In fact, recorded conflict-driven fatalities in these regions in 2020 surpassed those in the Diffa region, in the Lake Chad Basin, for the first time. Adding to this situation, instability in northern Nigeria has driven a rapid influx of refugees into Niger’s southern Maradi region. Principally due to conflict, almost 257,000 Nigeriens had been displaced internally as of October 2020.<br><br>Moreover, climate change is increasing the risk of natural shocks like drought and flooding. Niger ranks in the bottom five countries globally for high vulnerability to the impacts of climate change and experienced the worst floods in its history in 2020. The COVID-19 pandemic has therefore hit Niger at a particularly vulnerable time for the country.',
            location: {
                center: [1.86263, 17.48726],
                zoom: 4.78,
                pitch: 0.00,
                bearing: 0.00,
                bbox: [[-13.798,10.919], [17.235,23.966]]
            },
            onChapterEnter: [
                {
                    layer: 'Niger',
                    opacity: 1
                },
                {
                    layer: 'label_Niger',
                    opacity: 1
                },
                {
                    layer: 'NE-region',
                    opacity: 1
                },
                {
                    layer: 'label_NE_region',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Niger',
                    opacity: 0
                },
                {
                    layer: 'label_Niger',
                    opacity: 0
                },
                {
                    layer: 'NE-region',
                    opacity: 0
                },
                {
                    layer: 'label_NE_region',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Palestine',
            title: 'Palestine: New risks in one of the world’s most protracted crises',
            description: '<b>COVID-19, economic pressures, funding shortages and regional tensions all increase the risk of escalation in one of the most protracted situations on this year’s Watchlist.</b> Around half of all Palestinians are in need of humanitarian assistance, with needs most widespread in Gaza - accounting for 64% of those in need - due largely to the impacts of thirteen years of blockade and tensions between the de facto authorities in Gaza and the Israeli government. COVID-19 and measures introduced to slow its spread have further worsened the economic situation. Moreover, any recurrence of conflict in Gaza or widespread unrest, for example renewed moves by Israel to further annex parts of the West Bank or continued demolitions and forced displacement of Palestinians could result in increased humanitarian needs and major disruption to people’s livelihoods. All the while, funding levels for humanitarian agencies are at record lows.',
            location: {
                center: [34.13031, 31.91400],
                zoom: 7.57,
                pitch: 0.00,
                bearing: 0.00,
                bbox: [[32.783,31.184], [35.961,32.722]]
            },
            onChapterEnter: [
                {
                    layer: 'Palestine',
                    opacity: 1
                },
                {
                    layer: 'label_Palestine',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Palestine',
                    opacity: 0
                },
                {
                    layer: 'label_Palestine',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Somalia',
            title: 'Somalia: Floods and locusts arrive after years of conflict',
            description: '<b>Somalia’s humanitarian situation is characterized by a protracted crisis that could well worsen in 2021 as the country faces active conflict, the largest desert locust invasion in decades, worsening climate-related disasters, and the unprecedented COVID-19 pandemic.</b> The country saw 189,000 new displacements due to conflict in the first half of 2020 - one of the top five increases in the world. Somalia enters 2021 amid a delayed election process that could trigger greater conflict and crisis over the course of the year. While conflict remains the key driver of instability in the county, climate-related disasters and COVID-19 are exacerbating needs.<br><br>Food insecurity is likely to rise in the next year as locusts and natural disasters destroyed farmlands and affected this year’s harvests. In an IRC assessment in September 2020, <b>70% of people already reported they did not have access to enough food.</b> Somalia’s ability to withstand additional shocks is limited due to decades of conflict and instability.',
            location: {
                center: [37.80647, 5.60449],
                zoom: 4.75,
                pitch: 0.00,
                bearing: 0.00,
                bbox: [[29.970,-1.757], [52.279,12.382]]
            },
            onChapterEnter: [
                {
                    layer: 'Somalia',
                    opacity: 1
                },
                {
                    layer: 'label_Somalia',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Somalia',
                    opacity: 0
                },
                {
                    layer: 'label_Somalia',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Sudan',
            title: 'Sudan: Political transition strained by COVID-19',
            description: '<b>Sudan is entering 2021 navigating a fragile political transition and major economic challenges that are hampering the country’s recovery after decades of conflict and under-development.</b> 2021 will test the ability of Sudan’s young transitional government – the first new leadership in the country in three decades - to implement a recent fragile peace deal with some of the armed groups active in Darfur and Blue Nile/South Kordofan. The government’s ability to effectively adopt critical political and economic reforms will be further strained by a set of complex humanitarian crises, including some of the worst climate-related disasters in decades, an economic crisis deepened by COVID-19 and millions of people still displaced in the country. The price of the local food basket increased by 200% in 2020 in a country where 90% of families already spent most of their income on food before the pandemic. As a result, Sudan is seeing record levels of food insecurity. Additionally, the conflict in Ethiopia’s Tigray region is escalating rapidly and has already driven tens of thousands of people to seek refuge in Sudan.',
            location: {
                center: [21.03777, 15.71114],
                zoom: 4.48,
                pitch: 0.00,
                bearing: 0.00,
                bbox: [[9.140,7.885], [38.850,23.605]]
            },
            onChapterEnter: [
                {
                    layer: 'Sudan',
                    opacity: 1
                },
                {
                    layer: 'label_Sudan',
                    opacity: 1
                },
                {
                    layer: 'SD-region',
                    opacity: 1
                },
                {
                    layer: 'label_SD_region',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Sudan',
                    opacity: 0
                },
                {
                    layer: 'label_Sudan',
                    opacity: 0
                },
                {
                    layer: 'SD-region',
                    opacity: 0
                },
                {
                    layer: 'label_SD_region',
                    opacity: 0
                }
            ]
        },
        {
            id: 'closing',
            title: 'Watchlist 2021',
            description: 'Read the full report and learn more about how the IRC responds to the world’s worst humanitarian crises at <a href="https://www.rescue.org/report/2021-emergency-watchlist" target="_blank">Rescue.org</a>.</i>',
            location: {
                center: [-77.42306, 40.72311],
                zoom: 1.20,
                pitch: 0.00,
                bearing: 0.00,
                bbox: [[-190,-38.272], [79.453,45.089]]
            },
            onChapterEnter: [
                {
                    layer: 'country-label',
                    opacity: 0
                },
                {
                    layer: 'Yemen',
                    opacity: 1
                },
                {
                    layer: 'Afghanistan',
                    opacity: 1
                },
                {
                    layer: 'Syria',
                    opacity: 1
                },
                {
                    layer: 'DRC',
                    opacity: 1
                },
                {
                    layer: 'BurkinaFaso',
                    opacity: 1
                },
                {
                    layer: 'SouthSudan',
                    opacity: 1
                },
                {
                    layer: 'Nigeria',
                    opacity: 1
                },
                {
                    layer: 'Venezuela',
                    opacity: 1
                },
                {
                    layer: 'Ethiopia',
                    opacity: 1
                },
                {
                    layer: 'Mozambique',
                    opacity: 1
                },
                {
                    layer: 'Unranked',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Yemen',
                    opacity: 0
                },
                {
                    layer: 'Afghanistan',
                    opacity: 0
                },
                {
                    layer: 'Syria',
                    opacity: 0
                },
                {
                    layer: 'DRC',
                    opacity: 0
                },
                {
                    layer: 'BurkinaFaso',
                    opacity: 0
                },
                {
                    layer: 'SouthSudan',
                    opacity: 0
                },
                {
                    layer: 'Nigeria',
                    opacity: 0
                },
                {
                    layer: 'Venezuela',
                    opacity: 0
                },
                {
                    layer: 'Ethiopia',
                    opacity: 0
                },
                {
                    layer: 'Mozambique',
                    opacity: 0
                },
                {
                    layer: 'Unranked',
                    opacity: 0
                }
            ]
        }
    ]
};
