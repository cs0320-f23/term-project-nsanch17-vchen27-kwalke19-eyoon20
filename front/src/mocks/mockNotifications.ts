import Model from '../assets/model-placeholder.png'

// Mock data for notifications
const mockNotifications = [
    {
      id: '1',
      message: 'Your recent post has 5 new saves!',
      link: '/post/123',
      viewed: false,
      userPhoto: Model, // Placeholder image URL
      timestamp: new Date(new Date().setHours(new Date().getHours() - 2)), // 2 hours ago
    },
    {
      id: '2',
      message: 'Check a new listing for dresses.',
      link: '/photo/456',
      viewed: true,
      timestamp: new Date(new Date().setDate(new Date().getDate() - 1)), // 1 day ago
    },
    {
      id: '3',
      message: 'Check your profile for updates!',
      link: '/profile',
      viewed: false,
      userPhoto: 'https://via.placeholder.com/150',
      timestamp: new Date(new Date().setDate(new Date().getDate() - 7)), // 1 week ago
    },
    {
        id: '4',
        message: 'Check a new listing for dresses.',
        link: '/photo/456',
        viewed: true,
        timestamp: new Date(new Date().setDate(new Date().getDate() - 8)), // 1 day ago
    },
    {
        id: '5',
        message: 'Check a new listing for dresses.',
        link: '/photo/456',
        viewed: true,
        timestamp: new Date(new Date().setDate(new Date().getDate() - 8)), // 1 day ago
    },
    {
        id: '6',
        message: 'Check a new listing for dresses.',
        link: '/photo/456',
        viewed: true,
        timestamp: new Date(new Date().setDate(new Date().getDate() - 8)), // 1 day ago
    },
    {
        id: '7',
        message: 'Check a new listing for dresses.',
        link: '/photo/456',
        viewed: true,
        timestamp: new Date(new Date().setDate(new Date().getDate() - 8)), // 1 day ago
    },
    {
        id: '8',
        message: 'Check a new listing for dresses.',
        link: '/photo/456',
        viewed: true,
        timestamp: new Date(new Date().setDate(new Date().getDate() - 8)), // 1 day ago
    },
    {
        id: '9',
        message: 'Check a new listing for dresses.',
        link: '/photo/456',
        viewed: true,
        timestamp: new Date(new Date().setDate(new Date().getDate() - 8)), // 1 day ago
    },
    {
        id: '10',
        message: 'Check a new listing for dresses.',
        link: '/photo/456',
        viewed: true,
        timestamp: new Date(new Date().setDate(new Date().getDate() - 8)), // 1 day ago
    },
    {
        id: '11',
        message: 'Check a new listing for dresses.',
        link: '/photo/456',
        viewed: true,
        timestamp: new Date(new Date().setDate(new Date().getDate() - 8)), // 1 day ago
    },
    {
        id: '12',
        message: 'Check a new listing for dresses.',
        link: '/photo/456',
        viewed: true,
        timestamp: new Date(new Date().setDate(new Date().getDate() - 8)), // 1 day ago
    },
    {
        id: '13',
        message: 'Check a new listing for dresses.',
        link: '/photo/456',
        viewed: true,
        timestamp: new Date(new Date().setDate(new Date().getDate() - 8)), // 1 day ago
    },
    {
        id: '14',
        message: 'Check a new listing for dresses.',
        link: '/photo/456',
        viewed: true,
        timestamp: new Date(new Date().setDate(new Date().getDate() - 8)), // 1 day ago
    }, 
    {
        id: '15',
        message: 'Check a new listing for dresses.',
        link: '/photo/456',
        viewed: true,
        timestamp: new Date(new Date().setDate(new Date().getDate() - 8)), // 1 day ago
    },
  ];
  
  export default mockNotifications;