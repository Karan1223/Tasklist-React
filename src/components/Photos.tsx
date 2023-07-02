

type PhotoProps = 
{
  photo: {
    url: string;
    title: string;
    id: number;
    userId: number;
    thumbnailUrl: string;
  };
};

const Post = ({ photo }: PhotoProps) => {
  return (
    <div>
      <h3>
        {photo.id} - {photo.title}
      </h3>
      URL: <a href={photo.url}>{photo.url}</a><br/>
      Thumbnail URL: <a href={photo.thumbnailUrl}>{photo.thumbnailUrl}</a>
    </div>
  );
};

export default Post;
