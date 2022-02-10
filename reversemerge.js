function merge_halves(first, second) {
        let res = [];
        while (first.length && second.length) {
                if (first[0][1] > second[0][1]) {
                        res.push(first.shift())  
                    } else {
                        res.push(second.shift()) 
                    }
                }
        return res.concat(first, second);
}

function reverse_merge(values) {
        if (values.length < 2) {
                return values;
        }

        let midpoint = values.length / 2;
        const first = values.splice(0, midpoint);
        return merge_halves(reverse_merge(first),reverse_merge(values));
}
