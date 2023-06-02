import * as React from 'react';


export const Brand = 'Automancer';
export const LangBrand = 'PCRL';


export function PagePreviews(props) {
  return (
    <div className="page-previews">
      {props.pages
        .sort((a, b) => a.title.localeCompare(b.title))
        .map((page) => (
          <a href={page.url} className="item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="icon">
              {(() => {
                switch (page.type ?? 'article') {
                  case 'article':
                    return <path d="M371.96-240h215.757Q603-240 613.5-250.289q10.5-10.29 10.5-25.5Q624-291 613.662-301.5 603.323-312 588.04-312H372.283Q357-312 346.5-301.711q-10.5 10.29-10.5 25.5Q336-261 346.338-250.5 356.677-240 371.96-240Zm0-144h215.757Q603-384 613.5-394.289q10.5-10.29 10.5-25.5Q624-435 613.662-445.5 603.323-456 588.04-456H372.283Q357-456 346.5-445.711q-10.5 10.29-10.5 25.5Q336-405 346.338-394.5 356.677-384 371.96-384ZM263.717-96Q234-96 213-117.15T192-168v-624q0-29.7 21.15-50.85Q234.3-864 264-864h282q14.222 0 27.111 5Q586-854 597-843l150 150q11 11 16 23.889T768-642v474q0 29.7-21.162 50.85Q725.676-96 695.96-96H263.717ZM528-660v-132H264v624h432v-456H564q-15.3 0-25.65-10.35Q528-644.7 528-660ZM264-792v168-168 624-624Z" fill="currentColor" />;
                  case 'category':
                    return <path d="M331-514q-25 0-37-21.508T295-578l150-245q12-20 36-20t36 20l150 245q13 20.984 1 42.492Q656-514 631-514H331ZM699-80q-75.417 0-128.208-52.792Q518-185.583 518-261t52.792-128.208Q623.583-442 699-442t128.208 52.792Q880-336.417 880-261t-52.792 128.208Q774.417-80 699-80Zm-537.062-20Q145-100 132.5-112.5T120-141.938v-239.124Q120-398 132.5-410.5t29.438-12.5h239.124Q418-423 430.5-410.5t12.5 29.438v239.124Q443-125 430.5-112.5T401.062-100H161.938ZM699-164q42 0 69.5-27.5T796-261q0-42-27.5-69.5T699-358q-42 0-69.5 27.5T602-261q0 42 27.5 69.5T699-164Zm-495-20h155v-155H204v155Zm202-414h150l-75-122-75 122Zm75 0ZM359-339Zm340 78Z" fill="currentColor" />;
                }
              })()}
            </svg>
            <div className="title">{page.title}</div>
            <div className="description">{page.description}</div>
          </a>
        ))}
    </div>
  );
}
