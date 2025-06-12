import React from "react";

type PublicationItemProps = {
    title: string;
    authors: string;
    venue: React.ReactNode;
    tldr: string;
    link?: string;
};

const PublicationItem = ({ title, authors, venue, tldr, link }: PublicationItemProps) => {
    return (
        <div className="publication-item">
            <h3>
                <a href={link || "#publications"} target="_blank" rel="noopener noreferrer">
                    {title}
                </a>
            </h3>
            <p className="publication-meta"><strong>Authors:</strong> {authors}</p>
            <p className="publication-meta"><strong>Venue:</strong> {venue}</p>
            <p className="publication-meta"><strong>TL;DR:</strong> {tldr}</p>
        </div>
    );
};

export default PublicationItem;
