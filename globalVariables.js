/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   globalVariables.js                                 :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hcabel <hcabel@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/11/19 22:48:50 by hcabel            #+#    #+#             */
/*   Updated: 2021/11/19 22:48:51 by hcabel           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// Allow peer connection from the outside of your network
// (But not if they'r behing a symetric NAT, I didn't implement a TURN server)
const peerConnectionOptions = {
  iceServers: [
    { url: "stun:stun.embervoip.net:3478" },
    {
      url: "turn:turn.embervoip.net:3478",
      username: "guest",
      credential: "test@Polaris",
    },
  ],
};

const rooms = new Map(); // <RoomId, ClientArray>

module.exports = {
  peerConnectionOptions,
  rooms,
};
