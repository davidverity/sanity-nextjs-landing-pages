export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '626b1a3cdc8a833e3c11960e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-r7mejhhe',
                  apiId: 'fc80b719-5913-4c4d-997f-4e29459b6c3d'
                },
                {
                  buildHookId: '626b1a3cdc8a833d87119736',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-4vzv8pm7',
                  apiId: '993bf15f-b27f-4518-876f-c7c56ad3279e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/davidverity/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-4vzv8pm7.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
