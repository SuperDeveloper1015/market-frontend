import {Media} from 'components/Media';
import {FC} from 'react';

export type MediaProps = {
  media_url?: string;
  metadata: {
    title?: string;
    description?: string;
    mime_type?: string;
  };
  media_id?: string;
  _id?: string;
  metadata_url?: string;
  creator_address?: string;
  count?: number;
};

export type AllMediaProps = {
  media: MediaProps[];
  title?: string;
};

export const AllMedia: FC<AllMediaProps> = ({media}) => {
  return (
    <div className="flex sm:justify-center md:justify-between flex-wrap">
      {media.map((item, index) => (
        <Media key={index} media={item} />
      ))}
    </div>
  );
};
