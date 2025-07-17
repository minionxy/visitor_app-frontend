import React from 'react'

const Navvisitor = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-col-xxl">
                        <div className="row g-3">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                                    <div class="container-fluid bg-warning-subtle">
                                        <a class="navbar-brand" href="/add">VISITORS LOG</a>
                                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                            <span class="navbar-toggler-icon"></span>
                                        </button>
                                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                            <div class="navbar-nav">
                                                <a class="nav-link active" aria-current="page" href="/add">New Visitor</a>
                                                <a class="nav-link" href="/viewall">View All</a>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navvisitor