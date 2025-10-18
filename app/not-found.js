import Link from 'next/link';

export const metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist. Return to Nastenka\'s blog homepage to explore articles, gallery, and projects.',
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">

      {/* Fun Footer Message */}
      <div className="mt-0 text-2xl">
        <p>Error 404</p>
      </div>

      {/* Hi GIF Animation */}
      <div className="my-6">
        <img 
          src="/so-good-wink.gif" 
          alt="Animated winking character greeting visitors on 404 page" 
          className="mx-auto rounded-sm shadow-lg"
          style={{ 
            maxWidth: '250px', 
            height: 'auto'
          }} 
        />
      </div>

      {/* Fun Footer Message */}
      <div className="mt-0 text-xs text-gray-500 dark:text-gray-500">
        <p>sorry page wasn&apos;t found :{'<'} </p>
      </div>
    </div>
  );
}