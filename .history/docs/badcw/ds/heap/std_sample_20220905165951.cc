#include <queue>
#include <cassert>
int main() {
    std::priority_queue<int> p;
    assert(p.empty() == true);
    assert(p.size() == 0);
    // p.top(), p.pop(), core dump
    p.push(1);
    assert(p.empty() == false);
    assert(p.size() == 1);
    assert(p.top() == 1);
    p.push(2);
    assert(p.top() == 2);
}