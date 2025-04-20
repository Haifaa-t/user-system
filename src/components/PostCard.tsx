type PostCardProps = {
    title: string;
    body: string;
  };
  
  const PostCard = ({ title, body }: PostCardProps) => (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-lg font-bold">{title}</h2>
      <p>{body}</p>
    </div>
  );
  
  export default PostCard;
  