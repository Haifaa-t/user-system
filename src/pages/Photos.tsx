import { useSearchParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPhotosByAlbumId } from '@/api/users';
import { Image as ImageIcon, ArrowLeft } from 'lucide-react';

const Photos = () => {
  const [searchParams] = useSearchParams();
  const albumId = searchParams.get('albumId');
  const [photos, setPhotos] = useState<any[]>([]);

  useEffect(() => {
    if (albumId) {
      getPhotosByAlbumId(albumId).then(setPhotos);
    }
  }, [albumId]);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-xl">
      
        <div className="flex items-center gap-2 mb-6">
          <ImageIcon className="w-6 h-6 text-yellow-500" />
          <h1 className="text-2xl font-bold text-red-600">
            Photos from Album {albumId}
          </h1>
        </div>

       
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div key={photo.id} className="text-center">
              <img
                src={photo.thumbnailUrl}
                alt={photo.title}
                className="rounded-lg mx-auto mb-2"
              />
              <p className="text-sm text-gray-700">{photo.title}</p>
            </div>
          ))}
        </div>

       
        <div className="mt-10">
          <Link
            to="/users"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-red-600 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Users
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Photos;
