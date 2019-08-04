import * as React from 'react';

interface Props {
  media: any;
  className: string;
}
const Media: React.FunctionComponent<Props> = ({ media, className }) => {
  let background = null;
  if (media.url) {
    if (media.url.match(/gif|jpg|png|webp/)) {
      background = (
        <img alt={media.alt || media.title || null} src={media.url} />
      );
    }
    if (media.url.match(/mp4/)) {
      background = <video title={media.title} src={media.url} controls />;
    }
  }
  return (
    <div className={className} style={media.style || null}>
      {background}
      {media.children && (
        <div className={media.className || null}>{media.children}</div>
      )}
    </div>
  );
};

export default Media;
