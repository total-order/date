import test from 'ava';
import {increasing, decreasing} from '#module';

const repr = (x) => x.toISOString();

const eq = (x) => x === 0;
const lt = (x) => x < 0;
const gt = (x) => x > 0;

const macro = (t, compare, a, rel, b) => {
	t.true(rel(compare(a, b)));
};

const name = (compare) => {
	switch (compare) {
		case increasing: {
			return 'increasing';
		}

		case decreasing: {
			return 'decreasing';
		}

		default: {
			throw new Error('unknown comparison function');
		}
	}
};

macro.title = (title, compare, a, rel, b) =>
	title || `${name(compare)}(${repr(a)}, ${repr(b)}) ${rel.name} 0`;

const fns = [
	{compare: increasing, lt, gt},
	{compare: decreasing, lt: gt, gt: lt},
];

for (const {compare, lt, gt} of fns) {
	test(macro, compare, new Date(0), lt, new Date(1));
	test(macro, compare, new Date(1), gt, new Date(0));
	test(macro, compare, new Date(1), eq, new Date(1));
}
