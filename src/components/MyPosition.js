import { useState } from "react";

export const MyPosition = ({ position, videoRef, peerVideoConnection, data, connectedUsers }) => {
    const togglMute = async (user) => {
        let payload = {
            userId: user.user,
            link: data.link,
            muted: !user.muted
        }
        peerVideoConnection.updateUserMute(payload);
    }
    return (
        <div className="container-position">
            <div className="position">
                <p>ID: {position?.clientId}</p>
                <p>Name: {position?.name}</p>
                <p>Avatar: {position?.avatar}</p>
                <p>Position: {'x: ' + position?.x + ' y: ' + position?.y}</p>
                <p>Orientation: {' orientation: ' + position?.orientation}</p>
            </div>

            <div className="video">
                {/* <audio ref={videoRef} autoPlay playsInline muted /> */}
                <video ref={videoRef} autoPlay playsInline muted />
                {/* <button type="button" onClick={() => togglMute(position)}>{position?.muted ? 'Desmutar' : 'Mutar'}</button> */}
                {connectedUsers?.map((u, i) => (
                    <button key={i} type="button" onClick={() => togglMute(u)}>{u?.muted ? `Desmutar ${u.name}` : `Mutar ${u.name}`}</button>
                ))}
            </div>
        </div>
    );
}