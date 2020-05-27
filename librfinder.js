/*
  based on @spacepilotAV's refreshFinder
  GPLV2
*/

function guessOUM(width, height) {
	// only works in portrait right now
	if (width == 640 && height == 1136) {
		return [16777216, 268435456];
	}
	else if (width == 750 && height == 1334) {
		return [33554432, 268435456];
	}
	else if (width > 750 && height > 1334) {
		if (navigator.userAgent.includes("iPad")) {
			return [67108864, 268435456];
		}
		else {
			return [33554432, 268435456];
		}
	}
}
