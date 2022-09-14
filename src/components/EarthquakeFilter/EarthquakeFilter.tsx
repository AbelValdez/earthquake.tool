import { UrlFilter } from "../../services/EarthquakeService";

type Props = {
    selectedFilter: UrlFilter;
    onClick: (filter: UrlFilter) => void | null;
}
const EarthquakeFilter = (props: Props) => {
    const {selectedFilter, onClick} = props;
    return (
        <div className="btn-group" role="group">
            <button type="button"
                className={`btn ${selectedFilter === UrlFilter.all ? 'btn-secondary' : 'btn-light' }`}
                onClick={() => onClick(UrlFilter.all)}
                >
                {UrlFilter.all.toUpperCase()}
            </button>
            <button type="button"
                className={`btn ${selectedFilter === UrlFilter.magnitude_1_0 ? 'btn-secondary' : 'btn-light' }`}
                onClick={() => onClick(UrlFilter.magnitude_1_0)}>
                MAGNITUDE {UrlFilter.magnitude_1_0}

            </button>
            <button type="button"
                className={`btn ${selectedFilter === UrlFilter.magnitude_2_5 ? 'btn-secondary' : 'btn-light' }`}
                onClick={() => onClick(UrlFilter.magnitude_2_5)}>
                MAGNITUDE {UrlFilter.magnitude_2_5}
            </button>
            <button type="button"
                className={`btn ${selectedFilter === UrlFilter.magnitude_4_5 ? 'btn-secondary' : 'btn-light' }`}
                onClick={() => onClick(UrlFilter.magnitude_4_5)}>
                MAGNITUDE {UrlFilter.magnitude_4_5}
            </button>
            <button type="button"
                className={`btn ${selectedFilter === UrlFilter.significant ? 'btn-secondary' : 'btn-light' }`}
                onClick={() => onClick(UrlFilter.significant)}>
                {UrlFilter.significant.toUpperCase()}
            </button>
          </div>
    );
}
    
export default EarthquakeFilter;
