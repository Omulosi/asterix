import React from 'react';
import { Popup } from 'react-leaflet';


const MarkerPopup =  (props) => {
    const {properties} = props;

    return (
        <Popup>
            <div className="table-container">
                <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Popup>
       
    );
}

export default MarkerPopup;
