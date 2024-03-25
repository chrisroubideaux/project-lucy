// appetizers component
import Link from 'next/link';
import Image from 'next/image';

export default function Card({ appetizers }) {
  return (
    <>
      <Link className="card-link" href={`/appetizers/${appetizers.id}`}>
        <div className="card mb-2" style={{ maxWidth: '540px' }}>
          <div className="row g-0">
            <div className="col-sm-4">
              <Image
                src={appetizers.image}
                width={'170'}
                height={'150'}
                className="avatar mx-3 my-3"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="mb-2 fs-xs text-uppercase fw-bold">
                  {appetizers.name}
                </h5>
                {appetizers.description}
                <span className="d-inline-block "></span>
                <div
                  className="card-footer d-flex text-nowrap m-auto"
                  style={{ maxWidth: '55rem' }}
                >
                  <span className=" d-inline-block me-1">
                    <h6 className="fw-normal">{appetizers.category}</h6>
                  </span>

                  <span className="d-inline-block me-2"></span>
                  <span className="d-inline-block">
                    <h6 className=" fs-sm fw-normal">${appetizers.price}</h6>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
