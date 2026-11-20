
function maxSelectedElements(nums: number[]): number {
    nums.sort((a, b) => a - b);

    const dp = new Map<number, number>();
    let ans = 0;

    for (const num of nums) {
        const prev = dp.get(num - 1) || 0;
        const prevModified = dp.get(num) || 0;

        dp.set(num + 1, prevModified + 1);
        dp.set(num, prev + 1);

        ans = Math.max(
            ans,
            dp.get(num)!,
            dp.get(num + 1)!
        );
    }

    return ans;
}
