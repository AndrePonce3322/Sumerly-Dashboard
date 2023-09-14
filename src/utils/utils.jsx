import { IconLayersSubtract, IconLogout2, IconNotebook } from '@tabler/icons-react';
import { IconDashBoard, IconSettings } from '../../src/icons/icons';

export const SideBarOptions = [
  { content: 'Dashboard', id: 'dashboard', icon: <IconDashBoard /> },
  {
    content: 'Books',
    id: 'books',
    icon: <IconNotebook stroke={1} fill="#02e38b" color="#2a303d" width={32} height={32} />,
  },
  {
    content: 'Layers',
    id: 'layers',
    icon: <IconLayersSubtract stroke={1} fill="#02e38b" color="#2a303d" width={32} height={32} />,
  },
  {
    content: 'Profile',
    id: 'profile',
    icon: (
      <img
        src="https://lh3.googleusercontent.com/a/ACg8ocIAMYcgFrw_DRevFg0-GjP8HVNlzbX8Ckmp_sS-lp3Vy6E=s288-c-no"
        width={30}
        height={30}
        style={{ objectFit: 'cover', borderRadius: '50%', border: '1px solid #02e38b' }}
      />
    ),
  },
  {
    content: 'Settings',
    id: 'settings',
    icon: <IconSettings stroke={1} fill="#02e38b" color="#2a303d" width={32} height={32} />,
  },
  {
    content: 'Logout',
    id: 'logout',
    icon: <IconLogout2 stroke={2} style={{transform: 'translate(-3.2px)'}} fill="none" color="#02e38b" width={28} height={28} />,
  },
];
