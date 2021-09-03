<template>
  <section>
    <primary-hero
      hero-img='/hero-images/solutions-design'
      hero-title='Our Services'
      lead-weight='extrabold'
      lead-color-dark-shade='700'
      hero-copy=''
    />
    <main class='bg-white dark:bg-GunMetal lg:py-24 py-12'>
      <div class='mx-auto px-4 max-w-7xl sm:px-6 lg:px-8'>
          <div class='space-y-12'>
            <div class='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
              <h2 class='text-3xl font-extrabold tracking-tight sm:text-4xl text-GunMetalDk dark:text-white'
                  data-aos='fade-up'>Our Services</h2>
              <p class='text-xl text-GunMetal dark:text-gray-300' data-aos='fade-up'>Morbi quis egestas orci, ac
                pharetra tortor. Aliquam vitae nulla turpis. Sed vitae massa eros. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos. Integer ac est ac tellus hendrerit
                porttitor. Pellentesque non vulputate est, et efficitur diam. Nunc non ornare turpis. In tincidunt
                tincidunt odio, a sagittis ante ornare sed.</p>
            </div>
          </div>
        </div>
        <discover-cards :discover-cards='discoverCards' />
    </main>
    <div data-aos='fade-up'
         class='mt-3 border border-t-1 dark:border-t-1 border-GunMetal dark:border-gray-200' />
    <main class='bg-white dark:bg-GunMetal'>
      <div class='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
        <div class='space-y-12'>
          <div class='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
            <h2 class='text-3xl font-extrabold tracking-tight sm:text-4xl text-GunMetalDk dark:text-white'
                data-aos='fade-up'>Use Cases</h2>
            <p class='text-xl text-GunMetal dark:text-gray-300' data-aos='fade-up'>Donec vitae urna tincidunt, tempus
              enim sit amet, elementum lorem. Ut ac dui feugiat, pulvinar ligula vitae, finibus mauris. Aenean
              convallis, orci et mollis venenatis, nunc nulla ornare quam, ac vestibulum augue dolor id augue.</p>
          </div>
        </div>
      </div>
    </main>
    <media-banner />
    <contact-form />
  </section>
</template>
<script>
export default {
  data() {
    return {
      discoverCards: [
        {
          area: 'KPI Strategy',
          link: '/services/kpi-strategy',
          title: 'Tech Evaluation & Design',
          preview: 'We develop a solution that fits your organizational needs, resources and technology capabilities. We also evaluate data providers, existing vendors and offer alternative solutions when there are opportunities for improvement.',
          linkLabel: 'KPI Strategy'
        },
        {
          area: 'KPI Strategy',
          link: '/services/kpi-strategy',
          title: 'OODA Implementation',
          preview: 'The OODA (Observe, Orient, Decide, Act) Loop is a time-tested framework for executing, measuring, evaluating, and continuously improving on the fly that we have adopted to help drive a data-driven culture.',
          linkLabel: 'KPI Strategy'
        },
        {
          area: 'KPI Design',
          link: '/services/kpi-design',
          title: 'KPI Development',
          preview: 'An interactive process iteratively cycling through the three layers - Hypothesis Formation, KPI Development and Data Validation - until each KPI is validated and optimized.',
          linkLabel: 'KPI Design'
        },
        {
          area: 'KPI Design',
          link: '/services/kpi-design',
          title: 'Dashboard Design',
          preview: 'A canvas upon which KPI’s and signals are placed to represent current state while providing monitors & alerts, and initiating workflow activities. We pair graphic design experts with industry practitioners to generate maximimum value in dashboard design.',
          linkLabel: 'KPI Design'
        },
        {
          area: 'KPI Design',
          link: '/services/kpi-design',
          title: 'Signal Development',
          preview: 'Signals can be critically important in providing early warnings. As a complement to KPIs, they act as “scouts” that provide early indicators of changes that may impact KPIs. ',
          linkLabel: 'KPI Design'
        },
        {
          area: 'KPI Workflow',
          link: '/services/kpi-workflow',
          title: 'Process Design',
          preview: 'Workflows are the backbone to data-driven decision-making. We create workflows that drive clarity, seamless information flow and decision-routing; leading to accelerated, sound decision-making within your organization.',
          linkLabel: 'KPI Workflow'
        },
        {
          area: 'KPI Workflow',
          link: '/services/kpi-workflow',
          title: 'Implementation',
          preview: 'We stand-up test environments that run parallel to existing solutions then help your organization go live.',
          linkLabel: 'KPI Workflow'
        },
        {
          area: 'ESG',
          link: '/services/esg-services',
          title: 'Materiality Assessment & Remediation',
          preview: 'Experience this essential process for to understand your organization’s current standing, identify stakeholder groups and audience.',
          linkLabel: 'ESG Services'
        },
        {
          area: 'ESG',
          link: '/services/esg-services',
          title: 'Dashboard & Scorecard',
          preview: 'The Anduril team and advisors have roots in building tech infrastructure and applied data science, with demonstrated success.',
          linkLabel: 'ESG Services'
        }
      ]
    }
  }
}
</script>
