<template>
  <div>
    <primary-hero
      hero-img='/hero-images/esg-cover'
      hero-title='ESG Resource Center'
    />
    <section-navigation :nav-links='navLinks' />
    <news-stream id='press-box' :news-title='newsTitle' :news-lead='newsLead' :news-stream='esg' />
    <main-section-header section-title='ESG Resources' section-lead='Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed eget dolor tortor. Phasellus viverra sem non eros vestibulum, in auctor
              sapien commodo. In nisl erat, efficitur et ipsum in, posuere ornare tortor.' line-width='short' line-color='orange' is-tight-bottom />
    <small-card-rows id='esg-resources' :card-items='esgItems' :card-title='esgItemsTitle' large-grid-cols='4' />
    <small-card-rows id='esg-resources' :card-items='esgItems2' :card-title='esgItems2Title' large-grid-cols='4' />
    <small-card-rows id='esg-resources' :card-items='esgItems3' :card-title='esgItems3Title' large-grid-cols='4' />
    <small-card-rows id='esg-resources' :card-items='esgItems4' :card-title='esgItems4Title' large-grid-cols='4' />
    <expandable-list id='esg-faqs' :expandable-items='faqs' expandable-title='ESG Frequently Asked Questions' />
    <contact-form />
  </div>
</template>

<script>

export default {
  async asyncData({ $content }) {
    const esg = await $content('esg')
      .sortBy('date', 'desc')
      .without('body')
      .fetch()

    return {
      esg
    }
  },
  data() {
    return {
      navLinks: [
        { title: 'ESG PressBox', slug: 'press-box' },
        { title: 'ESG Resources', slug: 'esg-resources' },
        { title: 'ESG FAQs', slug: 'esg-faqs' }
      ],
      newsTitle: 'ESG Press',
      newsLead: 'Donec vitae urna tincidunt, tempus enim sit amet, elementum lorem. Ut ac dui feugiat, pulvinar ligula vitae, finibus mauris. Aenean convallis, orci et mollis venenatis, nunc nulla ornare quam, ac vestibulum augue dolor id augue.',
      esgItemsTitle: 'Published guidance for voluntary disclosures',
      esgItems: [
        {
          area: 'Voluntary Disclosures',
          link: 'https://www.sasb.org/',
          title: 'Sustainability Accounting Standards Board (SASB)',
          linkLabel: 'Visit'
        },
        {
          area: 'Voluntary Disclosures',
          link: 'https://www.globalreporting.org/',
          title: 'Global Reporting Initiatives (GRI)',
          linkLabel: 'Visit'
        },
        {
          area: 'Voluntary Disclosures',
          link: 'https://www.fsb-tcfd.org/',
          title: 'Task Force on Climate-related Financial Disclosures (TCFD)',
          linkLabel: 'Visit'
        },
        {
          area: 'Voluntary Disclosures',
          link: 'https://www.undp.org/sustainable-development-goals',
          title: 'United Nations Sustainable Development Goals (SDGs)',
          linkLabel: 'Visit'
        },
        {
          area: 'Voluntary Disclosures',
          link: 'https://integratedreporting.org/',
          title: 'Integrated Reporting (IR)',
          linkLabel: 'Visit'
        },
        {
          area: 'Voluntary Disclosures',
          link: 'https://www.cdsb.net/',
          title: 'Climate Change Disclosue Standards Board (CDSB)',
          linkLabel: 'Visit'
        },
        {
          area: 'Voluntary Disclosures',
          link: 'https://www.weforum.org/',
          title: 'World Economic Forum’s International Business Council (WEF IBC)',
          linkLabel: 'Visit'
        }
      ],
      esgItems2Title: 'Requesting data from companies (via questionnaires',
      esgItems2: [
        {
          area: 'Data Requests',
          link: 'https://www.cdp.net/en',
          title: 'Sustainability Accounting Standards Board (CDP)',
          linkLabel: 'Visit'
        },
        {
          area: 'Data Requests',
          link: 'https://www.spglobal.com/esg/performance/indices/djsi-index-family',
          title: 'Dow Jones Sustainability Indexes',
          linkLabel: 'Visit'
        },
        {
          area: 'Data Requests',
          link: 'https://www.fsb-tcfd.org/',
          title: 'Ratings Agencies'
        }
      ],
      esgItems3Title: 'Aggregating publicly available data from companies',
      esgItems3: [
        {
          area: 'Public Company Data',
          link: 'https://www.refinitiv.com/en',
          title: 'Refinitiv',
          linkLabel: 'Visit'
        },
        {
          area: 'Public Company Data',
          link: 'https://www.bloomberg.com/professional/dataset/global-environmental-social-governance-data/',
          title: 'Bloomberg',
          linkLabel: 'Visit'
        }
      ],
      esgItems4Title: 'Creating assessments of companies based on public and/or private information to sell to investors',
      esgItems4: [
        {
          area: 'Company Assessments',
          link: 'https://www.msci.com/our-solutions/esg-investing',
          title: 'MSCI',
          linkLabel: 'Visit'
        },
        {
          area: 'Company Assessments',
          link: 'https://www.reprisk.com/',
          title: 'RepRisk',
          linkLabel: 'Visit'
        },
        {
          area: 'Company Assessments',
          link: 'https://truvaluelabs.com/',
          title: 'Truvalue Labs',
          linkLabel: 'Visit'
        },
        {
          area: 'Company Assessments',
          link: 'https://www.ftserussell.com/products/indices/ftse4good',
          title: 'FTSE4Good',
          linkLabel: 'Visit'
        },
        {
          area: 'Company Assessments',
          link: 'https://www.sustainalytics.com/esg-data',
          title: 'Sustainalytics',
          linkLabel: 'Visit'
        },
        {
          area: 'Company Assessments',
          link: 'https://esg.moodys.io/',
          title: 'Moody\'s;',
          linkLabel: 'Visit'
        },
        {
          area: 'Company Assessments',
          link: 'https://www.spglobal.com/esg/scores/',
          title: 'S&P',
          linkLabel: 'Visit'
        }
      ],
      faqs: [
        {
          id: 1,
          question: 'What\'s the best thing about Switzerland?',
          answer:
            'I don\'t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.'
        },
        {
          id: 2,
          question: 'Why do you never see elephants hiding in trees?',
          answer:
            'Because they\'re so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.'
        },
        {
          id: 3,
          question: 'How do you make holy water?',
          answer:
            'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.'
        },
        {
          id: 4,
          question: 'Why can\'t you hear a pterodactyl go to the bathroom?',
          answer:
            'Because the pee is silent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.'
        },
        {
          id: 5,
          question: 'What do you call someone with no body and no nose?',
          answer: 'Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.'
        },
        {
          id: 6,
          question: 'Why did the invisible man turn down the job offer?',
          answer:
            'He couldn\'t see himself doing it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.'
        }
      ]
    }
  }
}
</script>
