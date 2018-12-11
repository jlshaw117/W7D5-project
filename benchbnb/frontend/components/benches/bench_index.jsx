import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {

    componentDidMount () {
        this.props.fetchBenches();
    }

    render() {

        let benches = this.props.benches.map((bench) => {
            <BenchIndexItem bench={bench}/>
        });
        return (
            <div>
                <ul>
                    {benches}
                </ul>
            </div>
        )
    }
}

export default BenchIndex;