/* "The Shell Game" involves cups upturned on a playing surface, with a ball placed underneath one of them. The index of the cups are swapped around multiple times. After that the players will try to find which cup contains the ball.

Your task is as follows. Given the cup that the ball starts under, and list of swaps, return the location of the ball at the end. Cups are given like array/list indices.

For example, given the starting position 0 and the swaps [(0, 1), (1, 2), (1, 0)]:

    The first swap moves the ball from 0 to 1
    The second swap moves the ball from 1 to 2
    The final swap doesn't affect the position of the ball.

So */

let swaps = [[0, 1], [1, 2], [1, 0]];
/* find_the_ball(0, swaps) == 2 */

/* There aren't necessarily only three cups in this game, but there will be at least two. You can assume all swaps are valid, and involve two distinct indices.
 */

function play(ballStartCup, swaps) {
  let currentBallPosition = ballStartCup;
  swaps.forEach((element) => {
    if (element.includes(currentBallPosition)) {
      if (element[0] == currentBallPosition) {
        currentBallPosition = element[1];
      } else {
        currentBallPosition = element[0];
      }
    }
  });
  return currentBallPosition;
}

console.log(play(1, swaps));
