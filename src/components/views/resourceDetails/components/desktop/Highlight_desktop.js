import React from 'react';

const HighlightDetailsDesktop = (props) => {
  console.log(props);

  let resource = props.resource;
  return(
    <div>
      <div className="container has-text-centered is-hidden-touch">
        <nav className="level">
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Views</p>
              <p className="title">
                {props.views}
              </p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Category</p>
              <span
                className={
                  'category-label ' + props.labelClassName(resource.category)
                }
              >
                  <p className="">
                    #{resource.category}
                  </p>
                </span>
            </div>
          </div>
          <div className="level-item has-text-centered title-item">
            <div>
              <p className="heading">App Name</p>
              <a
                className="title"
                href={resource.app_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {resource.app_name} <br className="" />
              </a>
              <a
                href={resource.app_link}
                target="_blank"
                rel="noopener noreferrer"
                className="visit-website button is-small is-outlined top20"
              >
                <i className="fa fa-external-link" aria-hidden="true" />
                Visit website{' '}
              </a>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Author</p>
              <a
                href={resource.author_link}
                target="_blank"
                className="title is-4 has-text-primary"
                rel="noopener noreferrer"
              >
                @{resource.author}
              </a>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Likes</p>
              <p className="title">
                <a onClick={props.addUpVote}>
                  {props.votes}
                  {props.displayCaret()}
                </a>
              </p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HighlightDetailsDesktop;
