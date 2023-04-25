import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import client from "../Client";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

const BasicPage = () => {
    const { slug } = useParams();
    const [entry, setEntry] = useState([]);

    useEffect(() => {
        const fetchPage = async () => {
            try {
                const response = await client.getEntries({
                    content_type: "basicPage",
                    "fields.slug": slug,
                });
                console.log("fetchPage response:", response);
                if (response.items.length) {
                    setEntry(response.items);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchPage();
    }, [slug]);
    return (
        <>
            {
                entry.map((item) => {
                    console.log("rendering item:", item);
                    const { title, description, subTitle } = item.fields;
                    const id = item.sys.id;
                    console.log("item id:", id);
                    const imageUrl = (item?.fields?.image2?.fields?.file?.url) ? item?.fields?.image2?.fields?.file?.url : '';
                    const richTextContent = documentToReactComponents(description, {
                        renderNode: {
                            [INLINES.ASSET_HYPERLINK]: (node) => (
                                <a href={`https://`+ node.data.target.fields.file.url} target="_blank" rel="noopener noreferrer">{node.data.target.fields.title}</a>
                            ),
                            [BLOCKS.EMBEDDED_ASSET]: (node) => (
                                <img
                                    src={`https:${node.data.target.fields.file.url}`}
                                    alt={node.data.target.fields.description}
                                />
                            ),
                        },
                    });
                    return (
                    <React.Fragment key={id}>
                        <div className="terms-condition-section">
                            <div className="terms-condition-wrapper">
                                <div className="terms-condition-banner">
                                    <div className="terms-condition-banner-image">
                                        <img src={imageUrl} alt={imageUrl.title}/>
                                    </div>
                                    <h2 className="terms-condition-banner-image-title">{title}</h2>
                                </div>
                                <div className="terms-condition-text-container">
                                    <h2 className="terms-condition-title">{subTitle}</h2>
                                    <p>{richTextContent}</p>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                    )
                })
            } 
        </>
    )
}

export default BasicPage;
