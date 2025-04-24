import {computeStatistics} from '../statistics.mjs';
import {expect} from 'chai';

describe('Statistics', () => {
    it('reports average, min, max', () => {
        const computedStats = computeStatistics([1.5, 8.9, 3.2, 4.5]);
        const epsilon = 0.001;
        expect(computedStats.average).to.be.closeTo(4.525, epsilon);
        expect(computedStats.min).to.be.closeTo(1.5, epsilon);
        expect(computedStats.max).to.be.closeTo(8.9, epsilon);
    });
    it('reports NaN for empty input', () => {
        const computedStats = computeStatistics([]);
        // All fields of computedStats (average, max, min) must be
        // NAN (not-a-number)
        isNaN(computedStats.average).to.be.true;
        isNaN(computedStats.min).to.be.true;
        isNaN(computedStats.max).to.be.true;
        // Use https://www.w3schools.com/jsref/jsref_isnan.asp
    });
});
