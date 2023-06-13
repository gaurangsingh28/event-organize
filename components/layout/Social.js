import React from 'react';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRounded from '@mui/icons-material/FacebookRounded';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Social() {
  return (
    <div className="h-48 -mb-2 overflow-hidden bg-indigo-600 p-3 rounded-t-xl mt-8">
      <div className="flex justify-center w-full h-full">
        <div className="relative w-80">
          <div className="rounded-full absolute top-8 left-0">
            <InstagramIcon
              className="social-icon hover:text-red-700"
              sx={{ fontSize: '2.5rem' }}
            />
          </div>
          <div className="rounded-full absolute top-8 right-0">
            <FacebookRounded
              className="social-icon hover:text-blue-700"
              sx={{ fontSize: '2.5rem' }}
            />
          </div>
          <div className="rounded-full absolute right-12 top-24 bottom-0">
            <TelegramIcon
              className="social-icon hover:text-blue-500"
              sx={{ fontSize: '2.5rem' }}
            />
          </div>
          <div className="rounded-full absolute bottom-0 top-24 left-14">
            <WhatsAppIcon
              className="social-icon hover:text-green-600"
              sx={{ fontSize: '2.5rem' }}
            />
          </div>
          <div className="rounded-full relative left-36 top-28">
            <LinkedInIcon
              className="social-icon hover:text-blue-800"
              sx={{ fontSize: '2.5rem' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social;
