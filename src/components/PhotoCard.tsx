type PhotoCardProps = {
    title: string;
    thumbnailUrl: string;
  };
  
  const PhotoCard = ({ title, thumbnailUrl }: PhotoCardProps) => (
    <div className="text-center">
      <img src={thumbnailUrl} alt={title} className="rounded mx-auto" />
      <p className="text-sm mt-2">{title}</p>
    </div>
  );
  
  export default PhotoCard;
  