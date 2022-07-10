import { RouteReuseStrategy } from '@angular/router/';
import { ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';
import { Injectable } from '@angular/core';
import { LocationStrategy } from '@angular/common';

@Injectable()
export class CacheRouteReuseStrategy implements RouteReuseStrategy {

    isBack = false;
    handlers: { [key: string]: DetachedRouteHandle } = {};

    // 뒤로가기 버튼을 눌렀을때만 적용
    constructor(
        location: LocationStrategy,
    ) {
        location.onPopState(() => {
            this.isBack = true;
        });
    }

    // https://github.com/angular/angular/issues/16713
    // 현재 라우팅의 스냅샷을 향우 라우팅에 사용할 수 있는지 여부 확인
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        return future.routeConfig === curr.routeConfig
    }

    // Detach 될때 상태를 저장할건지 아닌지 리턴해준다. detach 되는 Route를 저장해 두려면 true, 저장하지 않으려면 false 
    // 현재 라우팅에서 나갈때 호출 / 이전 라우팅 저장 할건지 true -> store 호출
    shouldDetach(route: ActivatedRouteSnapshot): boolean {

        if (this.getKey(route).startsWith('buckitlists')) {

            // // 리유즈를 사용해서 컴포넌트 destroy 안되서 일일히 해야함
            // if (this.getKey(route).startsWith('buckitlists')) {
            //     route.component['prototype'].ngOnDestroy();
            // }

            if (!route.data['reuse']) {
                return false;
            }
            return true
        } else {
            return false;
        }
    }

    // 저장해둔 Snapshot에 Attach 할 때의 델리게이트.
    // true -> retrieve 호출 false -> 컴포넌트 생성
    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        const canAttach = !!route.routeConfig && !!this.handlers[route['_routerState'].url];
        console.error("route['_routerState'].url", route['_routerState'].url);
        console.error("handlers", this.handlers);

        if (!this.isBack || !canAttach) {
            return false;
        } else {
            // 뒤로가기를 눌렀을경우 메인 플레이일 경우만 retrieve 호출
            if (this.getKey(route).startsWith('buckitlists')) {

                // // 리유즈를 사용했지만 새로 디자인때문에 불러와야함
                // if (this.getKey(route).startsWith('all')) {
                //     route.component['prototype'].reuseOnInit();
                // }

                return true
            }
            this.clearHandlers();
            return false
        }
    }

    // shouldDetach 저장하기로 한 스냅샷을 저장
    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {

        if (handle) {
            this.handlers[route['_routerState'].url] = handle;
        }
    }

    //저장된 handle반환 
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {

        if (!route.routeConfig || route.routeConfig.loadChildren) return null;
        if (route.routeConfig.loadChildren) {
            Object.keys(this.handlers).forEach(key => delete this.handlers[key]);
            return null as any;
        }
        // 뒤로가기 버튼 리셋
        setTimeout(() => {
            this.isBack = false;
        })

        if (!route.data['reuse']) {
            return null;
        }
        return this.handlers[route['_routerState'].url];
    }

    clearHandlers() {
        this.handlers = {}; // All clear Handlers!
    }

    getKey(route: ActivatedRouteSnapshot) {
        return route.pathFromRoot
            .map(v => v.url.map(segment => segment.toString()).join('/'))
            .filter(str => str.length > 0)
            .join('/');
    }

}