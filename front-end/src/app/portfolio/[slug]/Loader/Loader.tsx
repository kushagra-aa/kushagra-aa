import pageStyles from "../page.module.css";
import loaderStyles from "./loader.module.css";

function Loader() {
  return (
    <div className={pageStyles.main}>
      <div
        className={`${pageStyles.project_container} ${loaderStyles.loader_container}`}
      >
        <div
          className={`${pageStyles.project_thumbnail} ${loaderStyles.loader_thumbnail}`}
        />
        <h1>
          <span>_</span>
        </h1>
        <div
          className={`${pageStyles.project_description_details} ${loaderStyles.loader_description_details}`}
        >
          <p>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <span key={i} />
            ))}
          </p>
          <div
            className={`${pageStyles.project_details} ${loaderStyles.loader_details}`}
          >
            <div className={`${loaderStyles.loader_button}`} />
            <div className={`${loaderStyles.loader_button}`} />
            <p
              className={`${pageStyles.project_dates} ${loaderStyles.loader_dates}`}
            >
              <span />
              <span>-</span>
              <span />
            </p>
            <div
              className={`${pageStyles.project_tags_container} ${loaderStyles.loader_tags_container}`}
            >
              <p>Tags:</p>
              <div
                className={`${pageStyles.project_tags} ${loaderStyles.loader_tags}`}
              >
                {[1, 2].map((t) => (
                  <span
                    className={`${pageStyles.project_tag_card} ${loaderStyles.loader_tag_card}`}
                    key={t}
                  />
                ))}
              </div>
            </div>
            <div
              className={`${pageStyles.project_tech_container} ${loaderStyles.loader_tech_container}`}
            >
              <p>Tech:</p>
              <div
                className={`${pageStyles.project_tech} ${loaderStyles.loader_tech}`}
              >
                {[1, 2].map((t) => (
                  <span
                    className={`${pageStyles.project_tag_card} ${loaderStyles.loader_tag_card}`}
                    key={t}
                  />
                ))}
              </div>
            </div>
            <div
              className={`${pageStyles.project_with_container} ${loaderStyles.loader_with_container}`}
            >
              <p>With:</p>
              <div />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
