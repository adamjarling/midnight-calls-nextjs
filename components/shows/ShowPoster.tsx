import Image from "next/image";
import { Show } from "@/data/shows";

interface ShowPosterProps {
  show: Show;
  showButton?: boolean;
}

const ShowPoster = ({ show, showButton = true }: ShowPosterProps) => {
  if (!show.poster) return null;

  const content = (
    <div className="w-full max-w-2xl mx-auto">
      <Image
        src={show.poster}
        alt={`${show.venue.name} - ${new Date(show.datetime).toLocaleDateString()}`}
        width={800}
        height={1200}
        className="w-full h-auto"
        priority
      />
      {showButton && show.url.ticket && (
        <div className="flex justify-center mt-6">
          <a
            href={show.url.ticket}
            target="_blank"
            rel="noopener noreferrer"
            className="button text-center min-h-[44px] leading-normal"
          >
            Buy Tickets
          </a>
        </div>
      )}
    </div>
  );

  return content;
};

export default ShowPoster;
