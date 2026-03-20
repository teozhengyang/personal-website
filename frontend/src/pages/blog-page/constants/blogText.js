export const BLOG_SECTIONS = [
  {
    key: 'sports',
    label: 'Sports',
    description: 'Performance insights, analysis and concepts from the world of sports.',
  },
  {
    key: 'photography',
    label: 'Photography',
    description: 'Experiments, techniques and frames from my photography journey.',
  },
  {
    key: 'history',
    label: 'History & Politics',
    description: 'Moments, figures and ideas that shaped our world.',
  },
];

export const BLOG_SUBSECTIONS = {
  sports: [
    {
      id: 'football',
      title: 'Football',
      subSubsections: [
        {
          id: 'football-rules',
          title: 'Rules',
          body:
            'This section will cover the official rules, common fouls, and gameplay structure.',
        },
        {
          id: 'football-positions',
          title: 'Positions',
          body:
            'This section will explain the different positions on the field and their responsibilities.',
        },
        {
          id: 'football-tactics',
          title: 'Tactics',
          body:
            'This section will analyse common formations, tactical approaches, and in-game adjustments.',
        },
        {
          id: 'football-data-analysis',
          title: 'Data Analysis',
          body:
            'This section will explore performance analysis and statistical insights.',
        }
      ],
    },
    {
      id: 'basketball',
      title: 'Basketball',
      subSubsections: [
        {
          id: 'basketball-rules',
          title: 'Rules',
          body:
            'This section will cover the official rules, common fouls and gameplay structure.',
        },
        {
          id: 'basketball-positions',
          title: 'Positions',
          body:
            'This section will explain the different positions on the court and their responsibilities.',
        },
        {
          id: 'basketball-tactics',
          title: 'Tactics',
          body:
            'This section will analyse tactical approaches and in-game adjustments.',
        },
        {
          id: 'basketball-data-analysis',
          title: 'Data Analysis',
          body:
            'This section will explore performance analysis and statistical insights.',
        }
      ],
    },
    {
      id: 'formula-1',
      title: 'Formula 1',
      subSubsections: [
         {
          id: 'formula-1-rules',
          title: 'Rules',
          body:
            'This section will cover the official rules, common penalties and race structure.',
        },
        {
          id: 'formula-1-tactics',
          title: 'Tactics',
          body:
            'This section will analyse tactical approaches and in-game adjustments.',
        },
        {
          id: 'formula-1-data-analysis',
          title: 'Data Analysis',
          body:
            'This section will explore performance analysis and statistical insights.',
        }
      ],
    },
  ],
  photography: [
    {
      id: 'basics',
      title: 'Basics',
      subSubsections: [
        {
          id: 'basics-concepts',
          title: 'Concepts',
          body:
            'This section will cover exposure triangle, shooting modes, white balance and focus modes.',
        },
        {
          id: 'basics-composition',
          title: 'Composition',
          body:
            'This section will cover rule of thirds, leading lines, framing, symmetry and camera angles.',
        },
        {
          id: 'basics-shooting-techniques',
          title: 'Shooting Techniques',
          body:
            'This section will cover depth of field control, motion techniques, low light photography and backlighting.',
        },
        {
          id: 'basics-lighting',
          title: 'Lighting',
          body:
            'This section will cover natural/artificial lighting, golden/blue hour, harsh/soft light and indoor/outdoor lighting tips.',
        },
        {
          id: 'basics-focus',
          title: 'Focus',
          body:
            'This section will cover focus point selection, tracking objects, avoiding blur and handheld stability tips.',
        },
        {
          id: 'basics-customisation',
          title: 'Customisation',
          body:
            'This section will cover customising camera settings for a Fujifilm e.g. film simulations, film simulation recipes, dynamic range settings, grain/colour chrome effects',
        },
      ],
    },
    {
      id: 'types',
      title: 'Types',
      subSubsections: [
        {
          id: 'photography-street-photography',
          title: 'Street Photography',
          body:
            'This section will cover discreet shooting tips, fast settings, zone focusing and storytelling through candid moments.',
        },
        {
          id: 'photography-landscape-photography',
          title: 'Landscape Photography',
          body:
            'This section will cover wide compositions, aperture for sharpness and dynamic range, and using light to enhance scenery.',
        },
        {
          id: 'photography-night-photography',
          title: 'Night Photography',
          body:
            'This section will cover long exposure basics, ISO management, noise controls and city lights/light trails.',
        },
        {
          id: 'photography-action-photography',
          title: 'Action Photography',
          body:
            'This section will cover sports/moving subjects, auto-focus techniques, burst mode and panning for motion blur.',
        },
      ],
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      subSubsections: [
        {
          id: 'photography-portfolio-settings',
          title: 'Settings',
          body:
            'This section will cover the camera settings and techniques used to capture the photos in my portfolio.',
        },
      ],
    },
  ],
  history: [
    {
      id: 'countries',
      title: 'Countries & Regions',
      subSubsections: [
        {
          id: 'countries-singapore',
          title: 'Singapore',
          body:
            'This section will cover the history of Singapore.',
        },
        {
          id: 'countries-malaysia',
          title: 'Malaysia',
          body:
            'This section will cover the history of Malaysia.', 
        },
        {
          id: 'countries-usa',
          title: 'USA',
          body:
            'This section will cover the history of the USA.',
        },
        {
          id: 'region-taiwan',
          title: 'Taiwan',
          body:
            'This section will cover the history of Taiwan.',
        },
      ],
    },
    {
      id: 'events',
      title: 'Events',
      subSubsections: [
        {
          id: 'events-world-war-i',
          title: 'World War I',
          body:
            'This section will cover the causes, major players, key battles and consequences of World War I.',
        },
        {
          id: 'events-world-war-ii',
          title: 'World War II',
          body:
            'This section will cover the causes, major players, key battles and consequences of World War II.',
        },
        {
          id: 'events-cold-war',
          title: 'Cold War',
          body:
            'This section will cover the ideological conflict, major events and global impact of the Cold War.',
        }
      ],
    },
    {
      id: 'ideologies',
      title: 'Ideologies',
      subSubsections: [
        {
          id: 'ideologies-communism',
          title: 'Communism',
          body:
            'This section will cover the principles and practices of communist ideology.',
        },
        {
          id: 'ideologies-socialism',
          title: 'Socialism',
          body:
            'This section will cover the principles and practices of socialist ideology.',
        },
        {
          id: 'ideologies-capitalism',
          title: 'Capitalism',
          body:
            'This section will cover the principles and practices of capitalist ideology.',
        },
        {
          id: 'ideologies-liberalism',
          title: 'Liberalism',
          body:
            'This section will cover the principles and practices of liberal ideology.',
        },
        {
          id: 'ideologies-conservatism',
          title: 'Conservatism',
          body:
            'This section will cover the principles and practices of conservative ideology.',
        },
        {
          id: 'ideologies-libertarianism',
          title: 'Libertarianism',
          body:
            'This section will cover the principles and practices of libertarian ideology.',
        }
      ],
    },
  ],
};
