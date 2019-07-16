export default {
  items: [
    {
      name: 'Home',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
    {
      title: true,
      name: 'Components',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'User Management',
      url: '/dashboard',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Login',
          url: '/dashboard/',
          icon: 'icon-puzzle',
          children: [
        {
          name: 'Login',
          url: '/base/breadcrumbs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Person Face',
          url: '/base/cards',
          icon: 'icon-puzzle',
        }
      ]
        },
        {
          name: 'Person Face',
          url: '/base/cards',
          icon: 'icon-puzzle',
        }
      ],
    },
    {
      name: 'Lists and Boards',
      url: '/buttons',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Table',
          url: '/buttons/buttons',
          icon: 'icon-cursor',
        },
        {
          name: 'Gallery',
          url: '/buttons/button-dropdowns',
          icon: 'icon-cursor',
        },
        {
          name: 'Bader Chart',
          url: '/buttons/button-groups',
          icon: 'icon-cursor',
        },
        {
          name: 'Mind Map',
          url: '/buttons/brand-buttons',
          icon: 'icon-cursor',
        },
      ],
    },
    {
      name: 'Kanban',
      url: '/icons',
      icon: 'icon-star',
      children: [
        {
          name: 'Kanban Board',
          url: '/icons/coreui-icons',
          icon: 'icon-star'
        },
        {
          name: 'Kanban Slot',
          url: '/icons/flags',
          icon: 'icon-star',
        },
        {
          name: 'Kanban Card',
          url: '/icons/font-awesome',
          icon: 'icon-star'
        }
      ],
    },
    {
      name: 'Card',
      url: '/notifications',
      icon: 'icon-bell',
      children: [
        {
          name: 'Card',
          url: '/notifications/alerts',
          icon: 'icon-bell',
        },
        {
          name: 'CardNameEditor',
          url: '/notifications/badges',
          icon: 'icon-bell',
        },
        {
          name: 'DescriptionComponent',
          url: '/notifications/modals',
          icon: 'icon-bell',
        },
      ],
    }
  ],
};
